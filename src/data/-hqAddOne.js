const data = {
    block: 'HQ',
    method: 'POST',
    title: 'Crear hq',
    description: 'Crea un headquarter (sede)',
    path: {
        url: '/hq',
        parameters: [],
        example: '/hq'
    },
    queryParameters: [],
    body: {
        parameters: [
            {
                name: 'name',
                type: 'string',
                isRequired: true,
                validations: [
                    'No puede tener mas de 32 caracteres',
                    'Debe tener al menos 1 caracter'
                ]
                // data: [{
                //     name: 'foo',
                //     type: 'object',
                //     isRequired: false,
                //     data: [
                //         {
                //             name: 'name3',
                //             type: 'string',
                //         },
                //         {
                //             name: 'coso',
                //             type: 'string',
                //             description: 'esta es la desc'
                //         }
                //     ]
                // }]
            },
            // {
            //     name: 'shouldChangeProfile',
            //     type: 'boolean',
            //     isRequired: false,
            //     description: 'ACA'
                // validations: [
                //     'No puede tener mas de 64 caracteres',
                //     'Otra validacion'
                // ],
                // enum: [
                //     'Juan',
                //     'Pepe'
                // ]
            // },
            // {
            //     name: 'names',
            //     type: 'object',
            //     data: [
            //         {
            //             name: 'name1',
            //             type: 'string',
            //             description: 'ID de Mongoose',
            //             enum: [
            //                 'Juan',
            //                 'Pepe'
            //             ]
            //         },
            //         {
            //             name: 'name2',
            //             type: 'number',
            //         },
            //     ]
            // },
        ],
        examples: [
            {
                title: 'Ejemplo 1',
                data: {
                    name: "Egg"
                }
            },
            // {
            //     title: 'Ejemplo 2',
            //     data: {
            //         name: "Egg",
            //         shouldChangeProfile: true
            //     }
            // },
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
                            description: 'ID de Mongoose de HQ',
                        },
                        {
                            name: 'name',
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
                message: 'Sede creada correctamente',
                data: {
                    _id: '5a23f60b159f5c3438c75972',
                    name: 'Egg',
                    active: true,
                }
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