import { Pulse, Token } from '@pulsex/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0x6Af0c089b809a0E08cf84c6538A46C17dF234Ab3'

export const WETH = { 169: new Token(169, '0x0dc808adce2099a9f62aa87d9670745aba741746', 18, 'WETH', 'Wrapped Ether') }

export const ETHER = { ...Pulse.onChain(169), wrapped: WETH[169], chainId: 169, equals: Pulse.onChain(169).equals } as Pulse

export const INIT_CODE_HASH = '0xd5cfea86bf2f2528b04497e00097a7bcc640c87036f616739ceace2e35e88200'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)
