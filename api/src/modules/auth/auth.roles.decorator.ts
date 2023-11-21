import { SetMetadata } from '@nestjs/common';
import { ROLES_ENUM } from 'src/shared/constants/global.constants';

export const Roles = (...roles: ROLES_ENUM[]) => SetMetadata('roles', roles);
