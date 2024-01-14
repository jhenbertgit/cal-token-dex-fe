import { http, createConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

export const config = createConfig({
  chains: [bscTestnet, bsc],
  transports: {
    [bscTestnet.id]: http(),
    [bsc.id]: http(),
  },
});
