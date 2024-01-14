import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Container from "./Container";
import { Button } from "./ui/button";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

const MainHeader = () => {
  const { connect } = useConnect();
  const { isConnected, address } = useAccount();

  return (
    <header className="mt-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold">DEX</h1>
            </Link>
          </div>
          <Navigation />
          <Button onClick={() => connect({ connector: injected() })}>
            {isConnected
              ? address?.slice(0, 7) + "..." + address?.slice(-4)
              : "Connect Wallet"}
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
