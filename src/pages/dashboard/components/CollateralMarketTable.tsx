import { MarketCollateralsHistory } from '@anchor-protocol/app-fns';
import { LSDCollateralResponse } from '@anchor-protocol/app-provider/queries/borrow/useLSDCollateralQuery';
import {
  formatUST,
  formatUSTWithPostfixUnits,
  formatBAssetWithPostfixUnits,
} from '@anchor-protocol/notation';
import { TokenIcon } from '@anchor-protocol/token-icons';
import { bAsset } from '@anchor-protocol/types';
import { demicrofy } from '@libs/formatter';
import { HorizontalScrollTable } from '@libs/neumorphism-ui/components/HorizontalScrollTable';
import { IconSpan } from '@libs/neumorphism-ui/components/IconSpan';
import { InfoTooltip } from '@libs/neumorphism-ui/components/InfoTooltip';
import { u, UST } from '@libs/types';
import { AnimateNumber } from '@libs/ui';
import Big from 'big.js';
import { UIElementProps } from 'components/layouts/UIElementProps';
import { WhitelistCollateral } from 'queries';
import React, { useMemo } from 'react';
import big from "big.js";

interface CollateralMarketTableProps extends UIElementProps {
  whitelistCollateral: WhitelistCollateral[];
  marketData: MarketCollateralsHistory | undefined;
  additionalLSDInfo: LSDCollateralResponse | undefined;
}

export const CollateralMarketTable = (props: CollateralMarketTableProps) => {
  const { className, whitelistCollateral, marketData, additionalLSDInfo } = props;

  const collaterals = useMemo(() => {
    const array = whitelistCollateral.map((collateral) => {
      const data = marketData?.collaterals.find(
        (c) => c.token === collateral.collateral_token,
      );

      const additionalInfo = additionalLSDInfo?.find(
        (c) => c.info?.token === collateral.collateral_token
      );

      // We exchange the token values with the one in memory for LSD
      if(additionalInfo?.info?.info?.symbol){
        collateral.symbol = additionalInfo?.info?.info?.symbol;
      }
      if(additionalInfo?.info?.info?.name){
        collateral.name = additionalInfo?.info?.info?.name;
      }

      const exchangeRate = parseFloat(additionalInfo?.additionalInfo?.hubState?.exchange_rate ?? "1");

      const price = (parseFloat(data?.price ?? "0") * exchangeRate) as UST<number>;

      const value = (data ? demicrofy(data.collateral) : big(0 as bAsset<number>)).div(exchangeRate) as bAsset<Big>;

      const tvl = data
        ? demicrofy(Big(data.collateral).mul(data.price).toString() as u<UST>)
        : (0 as UST<number>);

      return {
        ...collateral,
        price,
        value,
        tvl,
      };
    });
    return array.sort((a, b) => {
      return Big(b.tvl).minus(Big(a.tvl)).toNumber();
    });
  }, [whitelistCollateral, marketData]);

  return (
    <HorizontalScrollTable minWidth={800} className={className}>
      <colgroup>
        <col style={{ width: 300 }} />
        <col style={{ width: 300 }} />
        <col style={{ width: 300 }} />
        <col style={{ width: 300 }} />
      </colgroup>
      <thead>
        <tr>
          <th>COLLATERAL MARKET</th>
          <th>
            <IconSpan>
              Price <InfoTooltip>Oracle price of collateral</InfoTooltip>
            </IconSpan>
          </th>
          <th>
            <IconSpan>
              Total Collateral <InfoTooltip>Total collateral value</InfoTooltip>
            </IconSpan>
          </th>
          <th>
            <IconSpan>
              Total Collateral Value{' '}
              <InfoTooltip>Total collateral value in USD</InfoTooltip>
            </IconSpan>
          </th>
        </tr>
      </thead>
      <tbody>
        {collaterals.map((collateral) => {
          return (
            <tr key={collateral.symbol}>
              <td>
                <div>
                  <i>
                    <TokenIcon
                      symbol={collateral.symbol}
                      path={collateral.icon}
                    />
                  </i>
                  <div>
                    <div className="coin">{collateral.symbol}</div>
                    <p className="name">{collateral.name}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="value">
                  ${' '}
                  <AnimateNumber format={formatUST}>
                    {collateral.price}
                  </AnimateNumber>
                </div>
              </td>
              <td>
                <div className="value">
                  <AnimateNumber format={formatBAssetWithPostfixUnits}>
                    {collateral.value}
                  </AnimateNumber>
                </div>
              </td>
              <td>
                <div className="value">
                  ${' '}
                  <AnimateNumber
                    format={formatUSTWithPostfixUnits}
                    id="collateral-value"
                  >
                    {collateral.tvl}
                  </AnimateNumber>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </HorizontalScrollTable>
  );
};
