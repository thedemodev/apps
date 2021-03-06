// Copyright 2017-2020 @polkadot/app-democracy authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveReferendumVote } from '@polkadot/api-derive/types';
import { Vote } from '@polkadot/types/interfaces';

import React from 'react';
import { AddressMini } from '@polkadot/react-components';

interface Props {
  vote: DeriveReferendumVote;
}

const sizing = ['0.1x', '1x', '2x', '3x', '4x', '5x', '6x'];

function voteLabel (vote: Vote): string {
  return `${sizing[vote.conviction.toNumber()]} - `;
}

function ReferendumVote ({ vote: { accountId, balance, vote } }: Props): React.ReactElement<Props> {
  return (
    <AddressMini
      balance={balance}
      labelBalance={voteLabel(vote)}
      value={accountId}
      withBalance
    />
  );
}

export default React.memo(ReferendumVote);
