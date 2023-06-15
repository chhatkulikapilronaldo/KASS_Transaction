"use strict";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require('path');
//const simple_crud = require("../../mcs/server/modules/simple_crud");
require('dotenv').config();


let filepath=path.dirname(__filename)
let testPath ="../../common/proto/funds_transfer.rpc.proto"

let exactPath = `${filepath}/${testPath}`


const packageDefinition = protoLoader.loadSync(exactPath, {
    keepCase: true,
    longs: 'string',
    defaults: true,
    package:"funds_transfer"
  });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  const SimpleCrudService = protoDescriptor.funds_transfer.rpc.SimpleCrudService;

  const client = new SimpleCrudService(
      "localhost:3001",
      grpc.credentials.createInsecure()
  );

 module.exports = client;
  