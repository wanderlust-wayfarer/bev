/**
 * A dependency graph.
 * @param {assets} object - probably
 * @param {date} string - current date in non-standard format
 * @param {modules} object - probably
 * @param {sumOfAssets} number - number of sizes from all current assets
 */
class DepGraph {
  constructor({ assets, modules }, folder) {
    this.assets = assets,
    this.date = this.getDate();
    this.modules = modules,
    this.sumOfAssets = this.updateSumOfAssets(assets),
  }

  getDate() {
    return new Date()
      .toISOString()
      .slice(0, 19)
      .replace('T', '')
      .replaceAll(':', '-')
      .replaceAll('-', '');
  }

  updateSumOfAssets(assets) {
    this.sumOfAssets = Object.values(assets).reduce((a, b) => a + b, 0);
  }

  populateAssets(assets) {
    assets.forEach(({ name, size }) => {
      this.assets[name] += size;
      this.sumOfAssets += size;
    });
  }

  populateModules(modules) {
    modules.forEach(({ name, size }) => {
      this.modules[name] += size;
    });
  }
}

export default depGraph;
