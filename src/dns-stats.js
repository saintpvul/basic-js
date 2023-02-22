const { NotImplementedError } = require("../extensions/index.js");

function getDNSStats(domains) {
  const stats = {};

  domains.forEach((domain) => {
    const parts = domain.split(".").reverse();
    let subdomain = "";
    parts.forEach((part) => {
      subdomain += `.${part}`;
      stats[subdomain] = (stats[subdomain] || 0) + 1;
    });
  });

  return stats;
}

module.exports = {
  getDNSStats,
};
