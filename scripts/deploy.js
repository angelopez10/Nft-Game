const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["El Bicho", "Mbappe", "Messi"],
      [
        "https://i.imgur.com/rzc1xxh.jpeg",
        "https://i.imgur.com/d3ZWvov.png",
        "https://i.imgur.com/LNMYr3K.jpeg",
      ],
      [500, 200, 100],
      [120, 80, 250],
      "Ronal CumMan", // Boss name
      "https://estaticos.efe.com/efecom/recursos2/imagen.aspx?-P-2fL4Jfo8HOMgFQIMn0JM8MbnxSg7-P-2bSe7gQ4TncnkXVSTX-P-2bAoG0sxzXPZPAk5l-P-2fU5Uot-P-2ffrVE9d9OHwUbwybTZ6g-P-3d-P-3d", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
  
    console.log("Contract deployed to:", gameContract.address);
    
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  