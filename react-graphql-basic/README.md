##### Move to projectDirectory [server] && [web-spa]

```
npm run || yarn install
```

---

##### Test Drive

```
- [dir Web-Spa]
npm run || yarn start

- [dir Server]
npm run || yarn dev
```

TechStack :

- [x] Node Js
- [x] Express
- [x] MongoDB + Mongoose
- [x] GraphQL
- [x] ApolloClient
- [x] React-CRA
- [x] Redis - [Download Redis For Windows](https://www.memurai.com/)
- [ ] .....and less more

##### Why Redis for cache?

```
DBserver :  cloud/atlas mongodb
```

```
-----------
| Results |
-----------

- 1st Attempt
-------------
Cache ? OK
POST /gqli? 200 261.191 ms - 328
Cache Used at  [{"_id":"5f947f561312be1590fcb800","name":"Bambang sutisna","age":35,"__v":0},{"_id":"5f947f751312be1590fcb801","name":"Budi sudarsono","age":32,"__v":0},{"_id":"5f94de1e4b5f0505bcfefb91","name":"Supardi Wicaksono","age":45,"__v":0},{"_id":"5f94e1cc82ac3921f41793fe","name":"Supardi Wicaksono","age":45,"__v":0}]
POST /gqli? 200 1.822 ms - 328

- 2nd Attempts
-------------
Cache ? OK
POST /gqli? 200 24.453 ms - 328
Cache Used at  [{"_id":"5f947f561312be1590fcb800","name":"Bambang sutisna","age":35,"__v":0},{"_id":"5f947f751312be1590fcb801","name":"Budi sudarsono","age":32,"__v":0},{"_id":"5f94de1e4b5f0505bcfefb91","name":"Supardi Wicaksono","age":45,"__v":0},{"_id":"5f94e1cc82ac3921f41793fe","name":"Supardi Wicaksono","age":45,"__v":0}]
POST /gqli? 200 3.326 ms - 328
```
