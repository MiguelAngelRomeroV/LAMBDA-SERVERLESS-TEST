const { swapiService } = require("../services/swapi.service");

describe("swapi test", () => {
    test("swapi getSpanishData", async () => {
        let result = await swapiService.getDataOfSWAPI(1)
        expect(result).toContain({
            "dataSWAPI": {
                "status": 200,
                "data": {
                    "nombre": "Luke Skywalker",
                    "altura": "172",
                    "peso": "77",
                    "color_cabello": "blond",
                    "color_piel": "fair",
                    "color_ojos": "blue",
                    "anio_nacimiento": "19BBY",
                    "genero": "male",
                    "mundo_natal": "https://swapi.dev/api/planets/1/",
                    "peliculas": [
                        "https://swapi.dev/api/films/1/",
                        "https://swapi.dev/api/films/2/",
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/6/"
                    ],
                    "especies": [],
                    "vehiculos": [
                        "https://swapi.dev/api/vehicles/14/",
                        "https://swapi.dev/api/vehicles/30/"
                    ],
                    "naves_estelares": [
                        "https://swapi.dev/api/starships/12/",
                        "https://swapi.dev/api/starships/22/"
                    ],
                    "creado": "2014-12-09T13:50:51.644000Z",
                    "editado": "2014-12-20T21:17:56.891000Z",
                    "url": "https://swapi.dev/api/people/1/"
                }
            }
        });
    });
})