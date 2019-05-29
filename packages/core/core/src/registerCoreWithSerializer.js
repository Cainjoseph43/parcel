// @flow strict-local

import {registerSerializableClass} from '@parcel/utils';
import Asset from './Asset';
import AssetGraph from './AssetGraph';
import Config from './Config';
import Dependency from './Dependency';
import Environment from './Environment';
// $FlowFixMe this is untyped
import packageJson from '../package.json';

const packageVersion = packageJson.version;
if (typeof packageVersion !== 'string') {
  throw new Error('Expected package version to be a string');
}

let registered;
export default function registerCoreWithSerializer() {
  if (registered) {
    return;
  }

  register('Asset', Asset);
  register('AssetGraph', AssetGraph);
  register('Config', Config);
  register('Dependency', Dependency);
  register('Environment', Environment);
  registered = true;
}

function register(ctorName: string, ctor: Class<*>): void {
  registerSerializableClass(packageVersion + ':' + ctorName, ctor);
}
