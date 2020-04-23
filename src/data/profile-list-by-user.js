const data = {
    description: 'Lista todos los perfiles por usuario',
    path: {
        url: 'GET /user/{_userId}/profiles',
        parameters: [
            {
                name: 'userId',
                type: 'string',
                isRequired: true,
                description: '_id Mongoose'
            },
        ],
        example: '/user/50341373e894ad16347efe01/profiles'
    },
    queryParameters: [],
    body: {
        parameters: []
    },
    responseSuccess: [
        {
            name: 'message',
            type: 'string',
            // description: 'ID de usuario',
            example: 'Datos obtenidos correctamente'
        },
        {
            name: 'data',
            type: 'object',
            data: [
                {
                    name: 'role',
                    type: 'string',
                    description: '',
                    example: 'professor'
                },
                {
                    name: '_userId',
                    type: 'string',
                    description: '_id de Mongoose',
                    example: '50341373e894ad16347efe01'
                },
                {
                    name: '_hqId',
                    type: 'string',
                    description: 'Sólo para roles que tengan una sede asignada',
                    example: '50341373e894ad16347efe01'
                },
                {
                    name: 'hqName',
                    type: 'string',
                    description: 'Sólo para roles que tengan una sede asignada',
                    example: 'UTN'
                },
                {
                    name: '_classId',
                    type: 'string',
                    description: 'Sólo para roles que tengan un curso asignado',
                    example: '50341373e894ad16347efe01'
                },
                {
                    name: 'courseName',
                    type: 'string',
                    description: 'Sólo para roles que tengan un curso asignado',
                    example: '5A'
                },
                {
                    name: 'votes',
                    type: 'number',
                    // description: 'Nombre de la sede',
                    example: 10
                },
            ],
            // description: 'datos',
            example: 'Datos obtenidos correctamente'
        },
    ],
}

export default data;