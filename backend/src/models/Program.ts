import mongoose, { Document, Schema } from 'mongoose';

export interface IProgram extends Document {
  sportId: mongoose.Types.ObjectId;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  duration: string;
  description: string;
  skills: string[];
  requirements: string[];
  coachId: mongoose.Types.ObjectId;
  fees: number;
  currency: string;
  maxStudents: number;
  currentStudents: number;
  schedule: string;
  highlights: string[];
  active: boolean;
}

const ProgramSchema = new Schema<IProgram>(
  {
    sportId: { type: Schema.Types.ObjectId, ref: 'Sport', required: true },
    name: { type: String, required: true },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'professional'],
      required: true,
    },
    duration: { type: String, required: true },
    description: { type: String },
    skills: [{ type: String }],
    requirements: [{ type: String }],
    coachId: { type: Schema.Types.ObjectId, ref: 'Coach' },
    fees: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    maxStudents: { type: Number, default: 20 },
    currentStudents: { type: Number, default: 0 },
    schedule: { type: String },
    highlights: [{ type: String }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProgram>('Program', ProgramSchema);
