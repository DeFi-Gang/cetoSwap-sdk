import { Pulse, Token } from '@pulsex/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0xF50c8E257CCF3e2b58651F78e3C2dc83446d9c47'

export const WETH = { 169: new Token(169, '0x0dc808adce2099a9f62aa87d9670745aba741746', 18, 'WETH', 'Wrapped Ether') }

export const ETHER = { ...Pulse.onChain(169), name: 'ETH', symbol: 'ETH',  wrapped: WETH[169], chainId: 169, equals: Pulse.onChain(169).equals } as Pulse

export const INIT_CODE_HASH = '0x4dd353593ba534bb8eb200b27a52ba6235fbc6cd20d766576a0a43e81cfc187e'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)
