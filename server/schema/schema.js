// const {clients,projects} = require('../sampleData');

const { 
    GraphQLObjectType ,
    GraphQLID, 
    GraphQLString , 
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType
    } = require('graphql');

//mongoose models
const Client = require('../models/Client');
const Project = require('../models/Project');

//clientType
const clientType = new GraphQLObjectType({
    name: 'Client',
    fields : ()=>({
        id : {type :GraphQLID },
        name : {type : GraphQLString},
        email : {type : GraphQLString},
        phone : {type : GraphQLString},
    })
})

//Project Type
const projectType = new GraphQLObjectType({
    name: 'Project',
    fields : ()=>({
        id : {type :GraphQLID },
        // clientId : {type : GraphQLString},
        name : {type : GraphQLString},
        description : {type : GraphQLString},
        status : {type : GraphQLString},
        client : {
            type:clientType,
            resolve(parent,args){
                return Client.findById(parent.clientId);
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields :{
        clients : {
            type : new GraphQLList(clientType),
            resolve(parent,args){
                return Client.find();
            }
        },
        client : {
            type : clientType,
            args : {id:{type:GraphQLID}},
            resolve(parent,args){
                return Client.findById(args.id)
            }
        },
        projects : {
            type : new GraphQLList(projectType),
            resolve(parent,args){
                return Project.find();
            }
        },
        project : {
            type : projectType,
            args : {id:{type:GraphQLID}},
            resolve(parent,args){
                return Project.findById(args.id)
            }
        }
    }
})

//mutation
const mutation = new GraphQLObjectType({
    name : 'mutation',
    fields : {
        //add client
        addClient : {
            type : clientType,
            args : {
                name : {type :  GraphQLNonNull(GraphQLString)},
                email : {type:  GraphQLNonNull(GraphQLString)},
                phone :{type:  GraphQLNonNull(GraphQLString)},
            },
            resolve(parent,args){
                let client = new Client({
                    name : args.name,
                    email : args.email,
                    phone : args.phone
                })
                return client.save();
            }
        },
        //delete client
        deleteClient :{
            type : clientType,
            args:{
                id : {type :  GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                return Client.findByIdAndRemove(args.id);
            }
        },
        //add a project
        addProject : {
            type : projectType,
            args : {
                name : {type :  GraphQLNonNull(GraphQLString)},
                description : {type:  GraphQLNonNull(GraphQLString)},
                status :{
                    type: new GraphQLEnumType({
                        name : 'ProjectStatus',
                        values : {
                            new : {value : 'not started'},
                            progress : {value : 'in Progress'},
                            completed : {value : 'completed'}
                        }
                    }),
                    defaultValue : 'not started' 
                },
                clientId : {type :  GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                let project = new Project({
                    name : args.name,
                    description : args.description,
                    status : args.status,
                    clientId : args.clientId
                })

                return project.save();
            }
        },

        //delete a project
        deleteProject : {
            type: projectType,
            args: {
                id : {type :  GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                return Project.findByIdAndRemove(args.id);
            }
        },

        //update a project
        updateProject : {
            type : projectType,
            args : {
                id : {type :  GraphQLNonNull(GraphQLID)},
                name : {type : GraphQLString},
                description : {type : GraphQLString},
                status : {
                    type : new GraphQLEnumType({
                        name : 'status',
                        values :{
                            new : {value : 'not started'},
                            progress : {value : 'in Progress'},
                            completed : {value : 'completed'}
                        }
                    }),
                    defaultValue : 'not started'
                }
            },
            resolve(parent,args){
                return Project.findByIdAndUpdate(args.id,{
                    $set : {
                        name : args.name,
                        description : args.description,
                        status : args.status
                    }
                }
                ,{new : true}
                );
            }
        }

    }
})

module.exports =  new GraphQLSchema({
    query : RootQuery,
    mutation
});
