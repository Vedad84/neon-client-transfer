import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWeb3React } from '@web3-react/core'
import NeonPortal from './NeonPortal'

const useNeonTransfer = (events, currentConnection) => {
  const { connection }  = useConnection()
  const { account } = useWeb3React()
  const { publicKey } = useWallet()
  let portal = new NeonPortal({
    solanaWalletAddress: publicKey,
    neonWalletAddress: account,
    customConnection: currentConnection ? currentConnection : connection
  })
  const createNeonTransfer = portal.createNeonTransfer.bind(portal, events)
  const createSolanaTransfer = portal.createSolanaTransfer.bind(portal, events)
  return { createNeonTransfer, createSolanaTransfer }
}
export default useNeonTransfer