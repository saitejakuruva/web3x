/*
  This file is part of web3x.

  web3x is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  web3x is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public License
  along with web3x.  If not, see <http://www.gnu.org/licenses/>.
*/

import { hexToNumber } from '../utils';

const identity = result => result;

export class NetRequestPayloads {
  public getId() {
    return {
      method: 'net_version',
      format: hexToNumber,
    };
  }

  public isListening() {
    return {
      method: 'net_listening',
      format: identity,
    };
  }

  public getPeerCount() {
    return {
      method: 'net_peerCount',
      format: hexToNumber,
    };
  }
}
