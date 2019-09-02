var items = [
    { value: 'テスト', text: '日本語' },
    { value: 'プログラミング', text: 'Java' },
    { value: '課題', text: 'vue.js' },
    { value: 'ゲーム', text: 'スマホ' },
    { value: '検索', text: 'スマホ' }
]

var targets = [
    { value: 'テスト', text: '' },
    { value: '課題', text: '' },
    { value: 'テスト', text: 'テスト' },
    { value: 'プログラミング', text: 'C' },

]

var trueFilter = items.filter(item =>
    // some は連想配列の要素を調べるときに使うと思っておくと良い
    // 下の様に or で検索して どちらか片方が一致すれば true が返ってくる
    targets.some(target => target.value === item.value || target.text === item.text)
);

var falseFilter = items.filter(item =>
    // 上とは違い、どちらにも該当しない( and 検索をすると完全一致検索になる)と true が返ってくる
    !targets.some(target => target.value === item.value || target.text === item.text)
);
console.log("一致\n", trueFilter)
console.log("不一致\n", falseFilter)