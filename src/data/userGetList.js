const data = {
    block: 'User',
    method: 'GET',
    title: 'List Users',
    description: 'Lista todos los usuarios',
    path: {
        url: '/user/{_userId}/meetings',
        parameters: [
            {
                name: 'userId',
                type: 'string',
                isRequired: true,
                description: 'ID de usuario'
            },
        ],
        example: '/user/123456/meetings'
    },
    queryParameters: [],
    body: {
        parameters: [
            {
                name: 'foo',
                type: 'array',
                isRequired: true,
                data: [{
                    name: 'foo',
                    type: 'object',
                    isRequired: false,
                    data: [
                        {
                            name: 'name3',
                            type: 'string',
                        },
                        {
                            name: 'coso',
                            type: 'string',
                            description: 'esta es la desc'
                        }
                    ]
                }]
            },
            {
                name: 'name',
                type: 'string',
                isRequired: true,
                validations: [
                    'No puede tener mas de 64 caracteres',
                    'Otra validacion'
                ],
                enum: [
                    'Juan',
                    'Pepe'
                ]
            },
            {
                name: 'names',
                type: 'object',
                data: [
                    {
                        name: 'name1',
                        type: 'string',
                        description: 'ID de Mongoose',
                        enum: [
                            'Juan',
                            'Pepe'
                        ]
                    },
                    {
                        name: 'name2',
                        type: 'number',
                    },
                ]
            },
        ],
        examples: [
            {
                title: 'Ejemplo',
                data: {
                    name: "Jon",
                    names: {
                        name1: 'Juan',
                        name2: 123
                    }
                }
            },
            {
                title: 'Ejemplo 2',
                data: {
                    name: "pepe",
                    names: {
                        name1: 'Juan',
                        name2: 'kasc'
                    }
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
                    type: 'object',
                    data: [
                        {
                            name: '_id',
                            type: 'string',
                            description: 'ID de Mongoose',
                        },
                        {
                            name: 'names',
                            type: 'object',
                            data: [
                                {
                                    name: 'name1',
                                    type: 'string',
                                    description: 'ID de Mongoose',
                                },
                                {
                                    name: 'name2',
                                    type: 'number',
                                },
                                {
                                    name: 'arrayprueba',
                                    type: 'array',
                                    data: [{
                                        name: 'foo',
                                        type: 'object',
                                        isRequired: false,
                                        data: [
                                            {
                                                name: 'name3',
                                                type: 'string',
                                            },
                                            {
                                                name: 'coso',
                                                type: 'string',
                                                description: 'esta es la desc'
                                            }
                                        ]
                                    }]
                                }
                            ]
                        },
                    ],
                },
            ],
            example: {
                message: 'Datos obtenidos correctamente',
                data: {
                    _id: '123123123',
                    names: {
                        name1: 'juan',
                        name2: 123,
                        name3: [{
                            foo: {
                                name3: "sdhc",
                                coso: "0900-123"
                            }
                        }]
                    }
                }
            }
        } ,
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