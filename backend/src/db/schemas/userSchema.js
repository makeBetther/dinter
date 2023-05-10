const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"]
  },
  partnerGender: {
    type: String,
    required: true,
    enum: ["male", "female", "both"]
  },
  email: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
    enum: ["serious", "casual","serious80", "casual80", "neighborhood", "NotSureYet"]
  },
  photos: [
    {
      filename: {
        type: String
      },
      URL: {
        type: String
      }
    },
    {
      filename: {
        type: String
      },
      URL: {
        type: String
      }
    },
    {
      filename: {
        type: String
      },
      URL: {
        type: String
      }
    },
    {
      filename: {
        type: String
      },
      URL: {
        type: String
      }
    },
    {
      filename: {
        type: String
      },
      URL: {
        type: String
      }
    },
    {
      filename: {
        type: String
      },
      URL: {
        type: String
      }
    }
  ]
});