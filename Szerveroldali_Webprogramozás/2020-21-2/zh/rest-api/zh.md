# Szerveroldali webprogramozás zh -- REST API

_2021. április 30._

## Tudnivalók

- Kommunikáció
  - **A Teams csoport Általános csatornáján lehetőleg lépj be a meetingbe, ami a ZH egész ideje alatt tart! Elsősorban ebben a meetingben válaszolunk a felmerülő kérdésekre, valamint az esetleges időközbeni javításokat is itt osztjuk meg!**
  - Ha a zárthelyi közben valamilyen problémád, kérdésed adódik, akkor keresd az oktatókat Teams chaten vagy a meetingben.
- Időkeret
  - **A zárthelyi megoldására 2 óra áll rendelkezésre: *16:00-18:00***
  - Oszd be az idődet! Ha egy feladat nagyon nem megy, akkor inkább ugord át (legfeljebb később visszatérsz rá), és foglalkozz a többivel, hogy ne veszíts pontot olyan feladatból, amit meg tudnál csinálni!
- Beadás
  - **A beadásra további *15* perc áll rendelkezésre: *18:00-18:15*. Ez a +15 perc *ténylegesen* a beadásra van! *18:15* után a Canvas lezár, és további beadásra nincs lehetőség!**
  - Ha előbb végzel, természetesen 16:00-tól 18:15-ig bármikor beadhatod a feladatot.
  - A feladatokat `node_modules` mappák nélkül kell becsomagolni egy .zip fájlba, amit a Canvas rendszerbe kell feltölteni!
- Értékelés:
  - A legutoljára beadott megoldás lesz értékelve.
  - **A zárthelyin legalább a pontok 40%-át, vagyis legalább 12 pontot kell elérni**, ez alatt a zárthelyi sikertelen.
  - Vannak részpontok.
  - A pótzárthelyin nem lehet rontani a zárthelyi eredményéhez képest, csak javítani.
  - **Érvényes nyilatkozat (megfelelően kitöltött statement.txt) hiányában a kapott értékelés érvénytelen, vagyis 0 pont.**
  - Az elrontott, elfelejtett nyilatkozat utólag pótolható: Canvasen kommentben kell odaírni a feladathoz.
- Egyéb:
  - A feladatokat JavaScript nyelven, Node.js környezetben kell megoldani!
  - **Minden feladat külön mappába kerüljön!**
  - Ha kell, akkor további csomagok telepíthetőek, de ezeket a `package.json` fájlban fel kell tüntetni!
  - Ellenőrzéskor a gyakorlatvezetők az alábbi parancsokat adják ki a feladatonkénti mappákban:
    ```
    # Csomagok telepítése:
    npm install
    # Friss adatbázis létrehozása:
    npm run freshdb
    # Fejlesztői verzió futtatása:
    npm run dev
    ```
  - Ellenőrzéshez és teszteléshez a Node.js *14.x*, az npm *7.x*, és a Firecamp *1.4.x* verzióját fogjuk használni.

## Hasznos linkek

- Dokumentációk
  - [ExpressJS dokumentáció](https://expressjs.com/en/4x/api.html)
  - [Sequelize dokumentáció](https://sequelize.org/master/)
  - [Firecamp Chrome kiegészítő](https://chrome.google.com/webstore/detail/firecamp-a-campsite-for-d/eajaahbjpnhghjcdaclbkeamlkepinbl)
  - [DB Browser for SQLite](https://sqlitebrowser.org/)

## Tartalomjegyzék

- [Szerveroldali webprogramozás zh -- REST API](#szerveroldali-webprogramozás-zh----rest-api)
  - [Tudnivalók](#tudnivalók)
  - [Hasznos linkek](#hasznos-linkek)
  - [Tartalomjegyzék](#tartalomjegyzék)
  - [Kezdőcsomag](#kezdőcsomag)
  - [Feladatsor](#feladatsor)

## Kezdőcsomag
Segítségképpen készítettünk egy kezdőcsomagot a zárthelyi elkészítéséhez. Csak telepíteni kell a csomagokat, és kezdheted is a fejlesztést.
- A kezdőcsomag letölthető innen: [restapi_alap.zip](https://people.inf.elte.hu/totadavid95/szerveroldali/2020_21_2/restapi_alap.zip)
- **A kezdőcsomag tartalmaz egy nyilatkozatot (statement.txt), amelyben a <NÉV> és a <NEPTUN> részeket helyettesítsd be a saját neveddel és Neptun kódoddal! Ha beadod a feladatot, azzal elfogadod és magadra nézve kötelezőnek tekinted a nyilatkozatot.**

## Feladatsor
Készíts egy REST API-t Node.js és SQLite3 segítségével, amelyben a felhasználók boltokat, árucikkeket, raktárakat és beszállítókat tudnak nyilvántartani.

- A szerver a 4000-es porton fusson!
- A táblák a következők:
  - Shop: boltok
  - Item: árucikkek
  - Warehouse: raktárak
  - Carrier: beszállítók
- A táblák közötti kapcsolatok így alakulnak:
  - Shop N - N Warehouse
    - Értelemszerűen itt egy kapcsolótáblában kell gondolkodni
  - Shop 1 - N Item
  - Warehouse 1 - N Carrier

- Az adatok struktúrája a következő:
  - Shop
    - name: string, unique (tehát egyedi, vagyis ugyanaz a név nem szerepelhet egyszerre több boltnál)
    - city: string
  - Item
    - name: string
    - price: number
    - shopId (összekapcsolásból jön)
  - Warehouse
    - name: string
    - city: string
    - capacity: number
  - Carrier
    - name: number, unique (tehát egyedi, vagyis ugyanaz a név nem szerepelhet egyszerre több beszállítónál)
    - numberOfCars: number
    - carCapacity: number
    - warehouseId (összekapcsolásból jön)

- Hozd létre az adatbázist, töltsd fel néhány adattal. Pár végpont védett. Ha nem tudod megoldani az authentikációt, akkor is készítsd el a végpontot! Hitelesített végpontokra a következő fejléccel kell küldeni a kérést:
  ```
  Authorization: Bearer <token>
  ```
  - Firecamp-ben az Auths fülnél válaszd a "No Auth" felirattal induló menüből a Bearer-t, és akkor elég csak a tokent megadni
- Oldd meg a következő feladatokat:
  - Az adatbázis tartalmazza a megfelelő táblákat néhány példaadattal. **(2 pont)**
  - Néhány, vagy akár mindegyik adathoz legyen megoldva a megfelelő reláció is! **(2 pont)**
  - `POST /shops`: egy név és város párost küldünk fel JSON objektumként, az adatokat elmentjük a shops táblába, majd visszatérünk az adatbázis rekordnak megfelelő JSON objektummal: pl. id, name, city mezőkkel. **(1 pont)**
    - Kérés
      ```json
      {
        "name": "B.O.O.L.",
        "city": "Városföld"
      }
      ```
    - Válasz:
      - 400 Bad request: hibás adat küldése esetén, pl. ha az adatbázis hibát dob ugyanolyan név beszúrása esetén.
      - 201 Created: siker esetén
        ```json
        {
          "id": 1,
          "name": "B.O.O.L.",
          "city": "Városföld",
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11..."
        }
        ```
   - `GET /shops`: összes bolt lekérdezése **(1 pont)**
    - Válasz
      - 200 OK
        ```json
        [
          {
            "id": 1,
            "name": "B.O.O.L.",
            "city": "Városföld",
            "createdAt": "2021-01-11...",
            "updatedAt": "2021-01-11..."
          },
          {
            "id": 2,
            "name": "B.O.O.T.",
            "city": "Faluland",
            "createdAt": "2021-01-11...",
            "updatedAt": "2021-01-11..."
          }
        ]
        ```
  - `GET /shops/:id`: adott azonosítójú bolt lekérdezése **(1 pont)**
    - Válasz
      - 404 Not found: ha a megadott id-vel nem létezik bolt
      - 200 OK: ha létezik az adott id, akkor visszatérünk a megfelelő shop objektummal JSON formában, pl. id, name, city mezőkkel.
        ```json
        {
          "id": 1,
          "name": "B.O.O.L.",
          "city": "Városföld",
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11..."
          }
        ```
  - `POST /auth`: hitelesítés. A példában megadott email-t (`user1@szerveroldali.hu`) kell beégetni, hogy csak erre adjon vissa token-t! **(3 pont)**
    - Kérés:
      ```json
      {
        "email": "user1@szerveroldali.hu"
      }
      ```
    - Válasz:
      - 401 Unauthorized: nem létező email cím esetén
      - 200 OK: létező email cím esetén. Ekkor egy JWT tokent kell generálni és leküldeni:
        ```json
        {
          "accessToken": "eyJh..."
        }
        ```
  - `POST /carriers`: új beszállító felvitele **(1 pont)**
    - Kérés: egy beszállító JSON formában felküldve.
      ```json
        {
          "name": "Speedo",
          "numberOfCars": 6,
          "carCapacity": 23
        }
      ```
    - Válasz
      - 201 Created: siker esetén, valamint adja vissza a létrehozott beszállítót
        ```json
        {
          "id": 8,
          "name": "Speedo",
          "numberOfCars": 6,
          "carCapacity": 23,
          "updatedAt": "2021-01-11...",
          "createdAt": "2021-01-11..."
        }
        ```
  - `GET /carriers`: összes beszállító lekérése **(1 pont)**
    - Válasz: 200 OK
      ```json
      [
        {
          "id": 1,
          "name": "Sétálár",
          "numberOfCars": 2,
          "carCapacity": 15,
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11..."
        },
        {
          "id": 2,
          "name": "Rohanár",
          "numberOfCars": 5,
          "carCapacity": 30,
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11..."
        },
        ...
      ]
      ```
  - `GET /carriers/:id`: egy adott beszállító lekérdezése **(1 pont)**
    - Válasz
      - 404 Not found: ha a megadott id-vel nem létezik beszállító
      - 200 OK
        ```json
        {
          "id": 1,
          "name": "Sétálár",
          "numberOfCars": 2,
          "carCapacity": 15,
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11..."
        }
        ```
  - `PATCH /carriers/:id`: egy beszállító módosítása **(1 pont)**
    - Kérés: egy beszállító JSON formában felküldve.
      ```json
      {
        "numberOfCars": 13
      }
      ```
    - Válasz
      - 404 Not found: ha a megadott id-vel nem létezik beszállító
      - 200 OK: siker esetén, és a módosított beszállító rekordja.
        ```json
        {
          "id": 8,
          "name": "Speedo",
          "numberOfCars": 13,
          "carCapacity": 23,
          "updatedAt": "2021-01-11...",
          "createdAt": "2021-01-13..."
        }
        ```
  - `POST /warehouses`: új raktár felvitele **(1 pont)**
    - Kérés: egy raktár JSON formában felküldve.
      ```json
      {
        "name": "Holház",
        "city": "Pheuhpolis",
        "capacity": 42,
      }
      ```
    - Válasz
      - 201 Created: siker esetén, a boltokat innentől nem kell listázni
        ```json
        {
          "id": 3,
          "name": "Holház",
          "city": "Pheuhpolis",
          "capacity": 42,
          "updatedAt": "2021-01-11...",
          "createdAt": "2021-01-11..."
        }
        ```
  - `GET /warehouses`: összes raktár lekérése **(2 pont)**
    - Válasz: 200 OK, a raktárakhoz kapcsolt szállítókat listázni kell a példán látható módon
      ```json
      [
        {
          "id": 1,
          "name": "AmazInG",
          "city": "Lafabel",
          "capacity": 280,
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11...",
          "Carriers": [
            {
              "id": 1,
              "name": "Sétálár",
              "numberOfCars": 2,
              "carCapacity": 15,
              "createdAt": "2021-01-11...",
              "updatedAt": "2021-01-11..."
            },
            {
              "id": 2,
              "name": "Rohanár",
              "numberOfCars": 5,
              "carCapacity": 30,
              "createdAt": "2021-01-11...",
              "updatedAt": "2021-01-11..."
            }
          ]
        },
        {
          "id": 1,
          "name": "Ezbaj",
          "city": "Ibst",
          "capacity": 150,
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11...",
          "Carriers": [
            {
              "id": 2,
              "name": "Rohanár",
              "numberOfCars": 5,
              "carCapacity": 30,
              "createdAt": "2021-01-11...",
              "updatedAt": "2021-01-11..."
            }
          ]
        }
      ]
      ```
    - Segítség:
      - Ha nem nézted meg, a csoportba kirakott videókban van példa, hogy lehet megoldani a boltok berakását.
  - `GET /warehouses/:id`: egy adott raktár lekérdezése **(2 pont)**
    - Válasz
      - 404 Not found: ha a megadott id-vel nem létezik raktár
      - 200 OK, a raktárhoz kapcsolt boltokat listázni kell a példán látható módon
        ```json
        {
          "id": 1,
          "name": "Ezbaj",
          "city": "Ibst",
          "capacity": 150,
          "createdAt": "2021-01-11...",
          "updatedAt": "2021-01-11..."
        }
        ```
  - `PATCH /warehouses/:id`: egy raktár módosítása **(1 pont)**
    - Kérés: egy raktár módosítani kívánt mezői JSON formában felküldve (nem muszáj minden mezőt felküldeni a frissítéshez).
      ```json
      {
        "city": "Pheuhpolia",
        "capacity": 50
      }
      ```
    - Válasz
      - 404 Not found: ha a megadott id-vel nem létezik raktár
      - 200 OK: siker esetén, és a módosított raktár rekordja.
        ```json
        {
          "id": 3,
          "name": "Holház",
          "city": "Pheuhpolia",
          "capacity": 50,
          "updatedAt": "2021-01-11...",
          "createdAt": "2021-01-11..."
        }
        ```
  - `POST /shops/:id/refill-shelves`: egy megadott bolthoz rendel hozzá árucikkeket. Fontos, hogy az új árucikkek nem adódnak hozzá a már meglévőekhez, hanem a lekérés után csak ezek fognak a bolthoz tartozni. **(3 pont)**
    - Kérés:
    ```json
      {
        "items": [
          {
            "name": "Víz",
            "price": 100
          }
        ]
      }
    ```
    - Válasz
      - 404: Not Found: ha a megadott id-vel nem létezik bolt
      - 200 OK: siker esetén megadja a bolthoz tartozó összes árucikket, (tehát csak a kérésben elküldötteket) az alábbi példán látható módon:
        ```json
          [
            {
              "id": 9,
              "name": "Víz",
              "price": 100,
              "createdAt": "2021-01-11...",
              "updatedAt": "2021-01-11..."
            },
            {
              "id": 10,
              "name": "Vaj",
              "price": 120,
              "createdAt": "2021-01-11...",
              "updatedAt": "2021-01-11..."
            }
          ]
        ```

    - Megjegyzés:
      - Bár a `shops` route-on vagyunk, itt lényegében az item-ek eltárolása számít, különös tekintettel a shopId-ra.

  - `GET /warehouses/:id/fire-carriers`: ez a végpont **HITELESÍTETT**. Meghívása után minden olyan beszállító, ahol az autók száma * autók kapacitása nem éri el a raktár kapacitásának felét, törölni kell a raktárból.
  Vagyis, ha `Carrier.numberOfCars * Carrier.carCapacity < Warehouse.capacity / 2`, akkor a Warehouse-ból törölni kell a hozzá tartozó carrierId-t. **(4 pont)**
    - Válasz
      - 401 Unauthorized: nincs megadva, vagy érvénytelen a token
      - 404 Not Found: ha a megadott id-vel nem létezik raktár
      - 200 OK: illetve vissza kell adni a törölt, valamint még meglévő beszállítókat, az alábbi példa szerint:
      ```json
        {
          "fired": [
            {
              "id": 1,
              "name": "Sétálár",
              "numberOfCars": 2,
              "carCapacity": 15,
              "createdAt": "2021-01-11...",
              "updatedAt": "2021-01-13..."
            }
          ],
          "remainders": [
            {
              "id": 2,
              "name": "Rohanár",
              "numberOfCars": 5,
              "carCapacity": 30,
              "createdAt": "2021-01-11...",
              "updatedAt": "2021-01-13..."
            }
          ]
        }
      ```


  - `GET /shops/:id/items/statistics`: egy boltban lévő árucikkekből készít statisztikát. **(3 pont)**
    - Válasz
      - 404 Not found: ha a megadott id-vel nem létezik bolt
      - 204 No Content: ha a bolt létezik ugyan, de még nem nincsen benne árucikk
      - 200 OK: le kell kérni a bolthoz aktuálisan tartozó statisztikákat, A statisztika a következő mezőkből áll: árucikkek darabszáma (mennyi item tartozik a shop-hoz), legmagasabb árú termék ára, legalacsonyabb árú termék ára, a boltban lévő termékek átlagára. Az alább példa szerint kell visszaadni a statisztikát:
        ```json
        {
          "count": 13,
          "max": 200,
          "min": 15,
          "average": 123.64
        }
        ```
