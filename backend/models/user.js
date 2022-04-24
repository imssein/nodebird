module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {  // MySQL에는 user로 저장됨 
        //id: {}, //user마다 고유한 값 mysql에서 자동으로 구성 
        email : {
            type: DataTypes.STRING(20), //STRING, TEXT. BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, //필수
            unique: true // 고유한 값
        },
        nickname : {
            type: DataTypes.STRING(20),
            allowNull: false //필수
        }, 
        password: {
            type: DataTypes.STRING(100),    //암호화를 하면 길이가 늘어나기때문에
            allowNull: false //필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',     //한글저장

    });
    User.associate = (db) => {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Likers'});
        db.User.belongsToMany(db.User, {through: 'Follow', as :'Followers', foreignKey : 'FollowingId'});
        db.User.belongsToMany(db.User, {through: 'Follow', as :'Followings', foreignKey : 'FollwerId'});

    }; 
    return User;
};