const User = require("../api/models/user.model");
const Favourite = require("../api/models/favourite.model");
const Comment = require("../api/models/comment.model");
const PokemonComment = require("../api/models/pokemonComment.model");
const Team = require("../api/models/team.model.js");
const TrainerCard = require("../api/models/trainerCard.model.js");
const Tournament = require("../api/models/tournament.model");
const Combat = require("../api/models/combat.model");
const { Sequelize } = require("sequelize");

const initializeRelations = () => {
  try {

    // Favourite - Users (One to One)
    Favourite.hasOne(User);
    User.belongsTo(Favourite);

    // Users - TrainerCard  (One to One)

    TrainerCard.hasOne(User);
    User.belongsTo(TrainerCard);

    // PokemonComment - Comments  (One to One)

    PokemonComment.hasOne(Comment);
    Comment.belongsTo(PokemonComment);

//  User < Comment (One to Many) 
// Comentarios pueden persistir sin usuario.
    User.hasMany(Comment)
    Comment.belongsTo(User, {
      foreignKey: {
        name: 'userId',
      },
    });

// User < Team (One to Many) 
// Faltaria (onDelete: "SET NULL",) ?? 

    User.hasMany(Team)
    Team.belongsTo(User);

    // User <> tournaments  (Many to Many)
    // Intermediate table defined in models.

    User.belongsToMany(Tournament, { through: 'UserTournament'});
    Tournament.belongsToMany(User, { through: 'UserTournament'});
0
    // Team <> Tournaments  (Many to Many)
    // Intermediate table defined in models.

    Team.belongsToMany(Tournament, { through: 'TournamentTeam' });
    Tournament.belongsToMany(Team, { through: 'TournamentTeam' });

    // Tournaments < Combats  (One to Many )
    Tournament.hasMany(Combat, {
      foreignKey: {
        name: 'id',
      },
    })
    Combat.belongsTo(Tournament, {
      foreignKey: {
        name: 'tournamentId',
      },
    });

    // Team < Combats  (One to Many)
    
    Team.hasMany(Combat)
    
    Combat.belongsTo(Team, {
      foreignKey: {
        name: 'TeamId1',
      },
    });

    Combat.belongsTo(Team, {
      foreignKey: {
        name: 'TeamId2',
      },
    });

    Combat.belongsTo(Team, {
      foreignKey: {
        name: 'winner',
      },
    });
   
    // Tournament - Combat (One to One)
    Tournament.hasOne(Combat, {
      foreignKey: {
        name: 'tournamentWinner'
      }
    });
    Combat.belongsTo(Tournament, {
      foreignKey: {
        name: 'winner'
      }
    });

    console.log("> Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
