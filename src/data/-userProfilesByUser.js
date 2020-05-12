const data = {
    block: 'Profiles',
    method: 'GET',
    title: 'Perfiles por usuario',
    description: 'Lista todos los perfiles por usuario',
    path: {
        url: '/{_userId}/profile',
        parameters: [
            {
                name: 'userId',
                type: 'string',
                isRequired: true,
                description: 'ID de usuario'
            },
        ],
        example: '/user/123456/profile'
    },
    query: {
        parameters: [
            {
                name: 'limit',
                type: 'string',
                description: 'Limite'
            },
        ],
        examples: [
            {
                title: 'Coso',
                data: {
                    limit: 123
                }
            },
            {
                title: 'Coso 2',
                data: {
                    limit: '0casc'
                }
            },
        ]
    },
    responses: [
        { 
            status: 200,
            data: [
                {
                    name: 'message',
                    type: 'string',
                },
                {
                    name: 'data',
                    type: 'array',
                    data: [
                        {
                            name: '_id',
                            type: 'string',
                            description: 'ID Mongoose de Profile',
                        },
                        {
                            name: 'votes',
                            type: 'number',
                        },
                        {
                            name: 'role',
                            type: 'string',
                            description: 'ID Mongoose de Profile',
                        },
                        {
                            name: '_userId',
                            type: 'string',
                            description: 'ID Mongoose de User'
                        },
                        {
                            name: '_hqId',
                            type: 'string',
                            description: 'ID Mongoose de HQ'
                        },
                        {
                            name: 'hqName',
                            type: 'string',
                        },
                        {
                            name: '_classId',
                            type: 'string',
                            description: 'ID Mongoose de Course'
                        },
                        {
                            name: 'courseName',
                            type: 'string',
                        },
                        {
                            name: 'active',
                            type: 'boolean',
                        },
                    ],
                },
            ],
            example: {
                message: 'Datos obtenidos correctamente',
                data: [{
                    _id: '5a23f60b159f5c3438c75972',
                    votes: 15,
                    role: 'professor',
                    _userId: '5a23f60b159f5c3438c75972',
                    _classId: '5a23f60b159f5c3438c75972',
                    courseName: '5a23f60b159f5c3438c75972',
                    _hqId: '5a23f60b159f5c3438c75972',
                    hqName: 'Egg',
                    active: true,
                }]
            }
        },
        { 
            status: '200 (admin)',
            data: [
                {
                    name: 'message',
                    type: 'string',
                },
                {
                    name: 'data',
                    type: 'array',
                    data: [
                        {
                            name: '_id',
                            type: 'string',
                            description: 'ID Mongoose de Profile',
                        },
                        {
                            name: 'votes',
                            type: 'number',
                        },
                        {
                            name: 'role',
                            type: 'string',
                            description: 'ID Mongoose de Profile',
                        },
                        {
                            name: '_userId',
                            type: 'string',
                            description: 'ID Mongoose de User'
                        },
                        {
                            name: 'active',
                            type: 'boolean',
                        },
                    ],
                },
            ],
            example: {
                message: 'Datos obtenidos correctamente',
                data: [{
                    _id: '5a23f60b159f5c3438c75972',
                    role: 'admin',
                    _userId: '5a23f60b159f5c3438c75972',
                    active: true,
                }]
            }
        },
        {
            status: 400,
            data: [
                {
                    name: 'message',
                    type: 'string'
                },
                {
                    name: 'code',
                    type: 'string'
                }
            ],
            example: {
                message: 'Mensaje de error',
                code: 'code-error'
            }
        }
    ]
}

export default data;