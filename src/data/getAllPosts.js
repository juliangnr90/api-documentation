const data = {
    block: 'Posts',
    method: 'GET',
    title: 'Obtiene todas las publicaciones',
    hasAuthorization: false,
    description: 'Lista todos las publicaciones, filtradas por los parametros enviados',
    path: {
        url: '/post',
        example: '/post'
    },
    query: {
        parameters: [
            {
                name: 'page',
                type: 'string',
                validations: [
                    'Debe tener formato numerico',
                    'Debe ser mayor a 0'
                ],
            },
            {
                name: '_brandId',
                type: 'string',
            },
            {
                name: '_modelId',
                type: 'string',
            },
            {
                name: '_agencyId',
                type: 'string',
            },
            {
                name: 'sortBy',
                type: 'string',
                // description: 'Limite'
                enum: ['last', 'expensive', 'cheaper']
            },
        ],
        examples: [
            {
                title: 'Ejemplo 1',
                data: {
                    page: '1',
                    _brandId: '5e1a0651741b255ddda996c4',
                    _modelId: '5a23f5e6159f5c3438c75971',
                    _agencyId: '5a255b04c9d9c40ac8927dd5',
                    sortBy: 'last',
                }
            }
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
                            name: 'posts',
                            type: 'array',
                            data: []
                            // description: 'ID Mongoose de Profile',
                        },
                        {
                            name: 'count',
                            type: 'number',
                            description: 'Cantidad total de publicaciones',
                        },
                        {
                            name: 'limit',
                            type: 'number',
                            description: 'Límite máximo de publicaciones por página',
                        },
                        {
                            name: 'filter',
                            type: 'object',
                            data: [
                                {
                                    name: '_modelId',
                                    type: 'string',
                                },
                                {
                                    name: '_brandId',
                                    type: 'string',
                                },
                                {
                                    name: '_agencyId',
                                    type: 'string',
                                },
                            ],
                            description: 'Filtro utilizado al buscar las publicaciones'
                        },
                    ],
                },
            ],
            example: {
                message: 'Datos obtenidos correctamente',
                data: {
                    posts: [
                        {
                            _id: '5a2539b41c574006c46f1a07', 
                            images: ['urlimage.webp', 'urlimage2.webp'], 
                            price: 750000, 
                            brandLabel: 'Ford', 
                            modelLabel: 'Fiesta', 
                            versionLabel: '1.5',
                            _userId: '5a23f60b159f5c3438c75972'
                        },
                    ], 
                    count: 125, 
                    limit: 15, 
                    filter: {
                        _brandId: '5e1a0651741b255ddda996c4',
                        _modelId: '5a23f5e6159f5c3438c75971',
                        _agencyId: '5a255b04c9d9c40ac8927dd5',
                    }
                }
            }
        }
    ]
}

export default data;