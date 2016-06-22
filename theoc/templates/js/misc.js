function parseTeamsAndComps (a) {
    return s = a.split(String.fromCharCode(166)).map(function (r) {
        var rArr = r.split("|");
        return {
            id: parseInt(rArr[0]),
            name: rArr[1],
            shortName: rArr[2],
            idStr: rArr[3]
        }
    }).filter(function (r) {
        return r.id;
    });
}
