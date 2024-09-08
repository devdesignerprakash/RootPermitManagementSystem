const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const VehicleRouteDetails = sequelize.define('VehicleRouteDetail', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  VehicleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Vehicles',
      key: 'Id'
    },
    onDelete: 'NO ACTION'
  },
  PreviousRouteDetailsId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'RouteDetails',
      key: 'Id'
    },
    onDelete: 'NO ACTION'
  },
  PreviousPermitNo: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  PreviousPermitDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  PreviousPermitValidDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  PreviousPermitIssuedBy: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  TransferDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  NewRouteDetailsId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'RouteDetails',
      key: 'Id'
    },
    onDelete: 'NO ACTION'
  },
  FitnessTestDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  FitnessTestValidity: {
    type: DataTypes.DATE,
    allowNull: false
  },
  FitnessTestOffice: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  InsuranceIssueDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  InsuranceValidDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  InsuranceIssuerCompany: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  InsuranceType: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: 'Full'
  },
  ApplicantName: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  ApplicantAddress: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  ApplicantContact: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  IsApplicantOwner: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  IsManjuriNamaAttached: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  ApplicantCitizenshipNumber: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  IsPermitApplicable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  InapplicableReason: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  VoucherNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  VoucherAmount: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false
  },
  VehicleRouteDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  registeredBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'UserDetails',
      key: 'Id'
    },
    onDelete: 'NO ACTION'
  },
  Approver: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'OfficeEmployee',
      key: 'Id'
    },
    onDelete: 'NO ACTION'
  },
  Requester: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'OfficeEmployee',
      key: 'Id'
    },
    onDelete: 'NO ACTION'
  },

  //associations
  
  tableName: 'VehicleRouteDetail',
  timestamps: false
});

module.exports = VehicleRouteDetails;
