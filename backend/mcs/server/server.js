'use strict';
/*
 *@server grpc-node-server
 */
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(__dirname,"./.env"),
});
console.log(path.resolve(process.cwd(), '.env'));
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { dbHelper } = require('./helpers');
// ../../common/proto
// ./../../
let filepath=path.dirname(__filename)
let testPath ="../../common/proto/funds_transfer.rpc.proto"

let exactPath = `${filepath}/${testPath}`
const packageDefinition = protoLoader.loadSync(exactPath, {
  keepCase: true,
  longs: 'string',
  defaults: true,
});
const server = new grpc.Server();
const simpleProto = grpc.loadPackageDefinition(packageDefinition);
// Grpc Methods
const simpleServiceCtl = require('./modules/simple_crud');

server.addService(simpleProto.funds_transfer.rpc.SimpleCrudService.service, {
  create: simpleServiceCtl.create,
 
});
server.bindAsync(`${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`, grpc.ServerCredentials.createInsecure(),()=>{
  server.start();
});


if (server.start) {
  dbHelper.init();
  console.log(`listening to port ${process.env.GRPC_PORT}, host ${process.env.GRPC_HOST}, date: ${new Date()}`);
}