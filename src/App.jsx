import { useAddress, useMetamask } from '@thirdweb-dev/react';


const App = () => {

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to PaddelDAO</h1>
        <h2>The First DAO for Paddel Lovers & Inverstors</h2>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  return (
    <div className="landing">
      <h1>Welcome to the Club 🥎</h1>
      <h2> Let's start.</h2>
    </div>
  );
}



export default App;
