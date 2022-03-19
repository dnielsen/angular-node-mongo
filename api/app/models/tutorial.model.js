module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial", // collection Name
        mongoose.Schema(
            {
                title: String
            },
        ) // Schema Name
    );
    return Tutorial;
};