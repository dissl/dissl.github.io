const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
	autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.5, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    listMaxHeight: 80, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [{//音频信息,包含以下
        name: '逍遥游',
        artist: 'Hayrul海力 / 福克斯',
        url: 'http://music.163.com/song/media/outer/url?id=1359507281.mp3',
        cover: 'http://music.163.com/song/media/outer/url?id=1359507281.jpg',
		lrc: 'http://music.163.com/song/media/outer/url?id=1359507281.lrc',
    },
    {
        name: '江山美人',
        artist: '福克斯 / 卫彬月',
        url: 'http://music.163.com/song/media/outer/url?id=1383937363.mp3',
        cover: 'http://music.163.com/song/media/outer/url?id=1383937363.jpg',
        lrc: 'http://music.163.com/song/media/outer/url?id=1383937363.lrc',
        theme: '#46718b'
    },
    {
        name: '侠',
        artist: '福克斯',
        url: 'http://music.163.com/song/media/outer/url?id=1384569209.mp3',
        cover: 'http://music.163.com/song/media/outer/url?id=1384569209.jpg',
        lrc: 'http://music.163.com/song/media/outer/url?id=1384569209.lrc',
        theme: '#46718b'
    },
    {
        name: '怡红院',
        artist: '颠倒 / 孤矢',
        url: 'http://music.163.com/song/media/outer/url?id=494886062.mp3',
        cover: 'http://music.163.com/song/media/outer/url?id=494886062.jpg',
        lrc: 'http://music.163.com/song/media/outer/url?id=494886062.lrc',
        theme: '#46718b'
    },
    {
        name: '古城一侧',
        artist: '毛儿 / 纸无笔砚',
        url: 'http://music.163.com/song/media/outer/url?id=1341210155.mp3',
        cover: 'http://music.163.com/song/media/outer/url?id=1341210155.jpg',
        lrc: 'http://music.163.com/song/media/outer/url?id=1341210155.lrc',
        theme: '#46718b'
    },
    {
        name: '四块五',
        artist: '隔壁老樊',
        url: 'http://music.163.com/song/media/outer/url?id=1365221826.mp3',
        cover: 'http://music.163.com/song/media/outer/url?id=1365221826.jpg',
        lrc: 'http://music.163.com/song/media/outer/url?id=1365221826.lrc',
        theme: '#46718b'
    }
	]
});