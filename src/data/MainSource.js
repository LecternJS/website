import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8']);
export default new DocsSource({
  id: 'minecraft-protocol',
  name: 'Minecraft Protocol',
  global: 'Minecraft Protocol',
  repo: 'lecternjs/minecraft-protocol',
  defaultTag: 'stable',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => semver.gte(tag, '9.0.0'),
});
