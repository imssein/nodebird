module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {   
       content: {
        type: DataTypes.TEXT,
        allowNull : false, 
       }, 
       //UserId: {} //어떤 사람이 작성했는지 
       //PostId: {} //어떤 글 댓글인 
    }, {
        charset: 'utf8mb4' ,    //이모티콘 사용 
        collate: 'utf8mb4_general_ci',     //한글저장
        
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User); 
        db.Comment.belongsTo(db.Post);

    };
    return Comment;
};