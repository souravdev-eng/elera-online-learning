import { Router } from 'express';
import { login } from '../controllers/user/loginUser';
import { newUser } from '../controllers/user/newUser';
import { userDetails } from '../controllers/user/userDetails';
import { userProfileUpdate } from '../controllers/user/userProfileUpdate';
import { protect } from '../middleware/protect';
import { requestValidation } from '../middleware/requestValidation';
import { userLoginUpValidation, userSignUpValidation } from '../validation/userValidationSchema';

const router = Router();

router.post('/signup', userSignUpValidation, requestValidation, newUser);
router.post('/login', userLoginUpValidation, requestValidation, login);
router.patch('/update-user-profile/:id', userProfileUpdate);

router.route('/me').get(protect, userDetails);

export { router as userRouter };
