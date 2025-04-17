import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUserController";
import { UpdateUserController} from "./controller/user/UpdateUserController";
import { DeleteUserController} from "./controller/user/DeleteUserController";
import {AutenticationController} from "./controller/autentication/AutenticationController";

const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const autenticationController  = new AutenticationController();

import {ensureAuthenticated} from "./midleware/ensureAuthenticated";

const router = Router();


router.post("/login", autenticationController.handle);

router.post("/users", createUserController.handle);

router.get("/users", listUsersController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.use(ensureAuthenticated);
export {router}