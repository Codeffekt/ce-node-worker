import { workerData } from 'worker_threads';
import * as path from 'path';
import { ProcessingListener } from './ProcessingListener';

require('ts-node').register();
const { task } = require(path.resolve(__dirname, workerData.path));

task(new ProcessingListener(workerData.context));