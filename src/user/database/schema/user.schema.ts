import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserGender, UserRole, UserStatus } from 'src/utils/enum';

export const userOption: SchemaOptions = {
  versionKey: false,
  collection: 'user',
};

@Schema(userOption)
export class UserDocument {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;
  @Prop()
  username: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ enum: UserRole })
  role: UserRole;

  @Prop({ enum: UserGender })
  gender: UserGender;
  @Prop({ enum: UserStatus, default: UserStatus.ACTIVE })
  status: UserStatus;

  @Prop()
  password: string;

  @Prop({ nullable: true })
  accessToken?: string;
  @Prop({ nullable: true })
  refreshToken?: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
