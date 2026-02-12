// Users Controller Template
import { Response } from 'express';
import { AuthRequest } from '../../middleware/authGuard';
import { asyncHandler } from '../../middleware/errorHandler';

export class UsersController {
  getAll = asyncHandler(async (req: AuthRequest, res: Response) => {
    // TODO: Get all users with pagination
    res.status(501).json({ message: 'Get all users - to be implemented' });
  });

  getById = asyncHandler(async (req: AuthRequest, res: Response) => {
    // TODO: Get user by ID
    res.status(501).json({ message: 'Get user by ID - to be implemented' });
  });

  create = asyncHandler(async (req: AuthRequest, res: Response) => {
    // TODO: Create new user
    res.status(501).json({ message: 'Create user - to be implemented' });
  });

  update = asyncHandler(async (req: AuthRequest, res: Response) => {
    // TODO: Update user
    res.status(501).json({ message: 'Update user - to be implemented' });
  });

  delete = asyncHandler(async (req: AuthRequest, res: Response) => {
    // TODO: Delete user
    res.status(501).json({ message: 'Delete user - to be implemented' });
  });
}
