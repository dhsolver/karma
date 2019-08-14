function getEnvHash(requiredVars) {
  const envHash = {};

  requiredVars.forEach(envVarName => {
    envHash[envVarName] = JSON.stringify(process.env[envVarName]);
  });

  return envHash;
}

module.exports = {
  getEnvHash
};
