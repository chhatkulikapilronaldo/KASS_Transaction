"use strict";
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require('path');
const simple_crud = require("../../mcs/server/modules/simple_crud");
require('dotenv').config();
let filepath=path.dirname(__filename)
let testPath ="./../../common/proto/simple_crud.rpc.proto"

let exactPath = `${filepath}/${testPath}`


const packageDefinition = protoLoader.loadSync(exactPath, {
    keepCase: true,
    longs: 'string',
    defaults: true,
    package:"example.simple_crud"
  });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  const SimpleCrudService = protoDescriptor.example.simple_crud.rpc.SimpleCrudService;

  const client = new SimpleCrudService(
      "localhost:3001",
      grpc.credentials.createInsecure()
  );
  
  module.exports = client;
  
  