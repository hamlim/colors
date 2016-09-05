const pkg = {
	"colors": [
		{
			"hex": "#D1E2FB"
		},
		{
			"hex": "#145374"
		},
		{
			"hex": "#005689"
		},
		{
			"hex": "#007CB9"
		},
		{
			"hex": "#F6C667"
		},
		{
			"hex": "#15EDA3"
		},
		{
			"hex": "#0EA47A"
		},
		{
			"hex": "#007AB5"
		},
		{
			"hex": "#005A85"
		},
		{
			"hex": "#041122"
		},
		{
			"hex": "#259073"
		},
		{
			"hex": "#E8E8E8"
		},
		{
			"hex": "#191BA9"
		},
		{
			"hex": "#068B80"
		},
		{
			"hex": "#FAF9F0"
		},
		{
			"hex": "#FF5722"
		},
		{
			"hex": "#D8E6EC"
		},
		{
			"hex": "#03D6D2"
		},
		{
			"hex": "#FFFCBF"
		},
		{
			"hex": "#083C5A"
		},
		{
			"hex": "#4CB648"
		},
		{
			"hex": "#FCC72C"
		},
		{
			"hex": "#E4F4FD"
		},
		{
			"hex": "#118DF0"
		},
		{
			"hex": "#0E2F56"
		},
		{
			"hex": "#FF304F"
		},
		{
			"hex": "#ECECDA"
		},
		{
			"hex": "#364F6B"
		},
		{
			"hex": "#3FC1C9"
		},
		{
			"hex": "#F5F5F5"
		},
		{
			"hex": "#FC5185"
		},
		{
			"hex": "#591FCE"
		},
		{
			"hex": "#0C9CEE"
		},
		{
			"hex": "#3DBDC2"
		},
		{
			"hex": "#A1F480"
		},
		{
			"hex": "#2E94B9"
		},
		{
			"hex": "#FFFDC1"
		},
		{
			"hex": "#F0B775"
		},
		{
			"hex": "#D25565"
		},
		{
			"hex": "#4AE3B5"
		},
		{
			"hex": "#EEEEEE"
		},
		{
			"hex": "#2A5D67"
		},
		{
			"hex": "#171332"
		},
		{
			"hex": "#2DAF94"
		},
		{
			"hex": "#3EC8AC"
		},
		{
			"hex": "#4BE4C5"
		},
		{
			"hex": "#C8F6ED"
		},
		{
			"hex": "#43496E"
		},
		{
			"hex": "#544D7E"
		},
		{
			"hex": "#65589C"
		},
		{
			"hex": "#FFC12D"
		},
		{
			"hex": "#2794EB"
		},
		{
			"hex": "#BFF8D4"
		},
		{
			"hex": "#47D6B6"
		},
		{
			"hex": "#17B3C1"
		},
		{
			"hex": "#415F77"
		},
		{
			"hex": "#D1E9EA"
		},
		{
			"hex": "#FC5050"
		},
		{
			"hex": "#FFD00C"
		},
		{
			"hex": "#5CC2F2"
		},
		{
			"hex": "#C1EAF2"
		},
		{
			"hex": "#F7F3F3"
		},
		{
			"hex": "#3EC1D3"
		},
		{
			"hex": "#F6F7D7"
		},
		{
			"hex": "#FF9A00"
		},
		{
			"hex": "#FF165D"
		},
		{
			"hex": "#127780"
		},
		{
			"hex": "#3C2F3D"
		},
		{
			"hex": "#2EAC6D"
		},
		{
			"hex": "#9DDA52"
		},
		{
			"hex": "#F0F0F0"
		},
		{
			"hex": "#121435"
		},
		{
			"hex": "#FAF9F0"
		},
		{
			"hex": "#EDEBCA"
		},
		{
			"hex": "#FF5722"
		},
		{
			"hex": "#384137"
		},
		{
			"hex": "#406661"
		},
		{
			"hex": "#3BB873"
		},
		{
			"hex": "#94ED88"
		},
		{
			"hex": "#7A4579"
		},
		{
			"hex": "#D56073"
		},
		{
			"hex": "#EC9E69"
		},
		{
			"hex": "#FFFF8F"
		},
		{
			"hex": "#83FFE1"
		},
		{
			"hex": "#7045FF"
		},
		{
			"hex": "#C768FF"
		},
		{
			"hex": "#FFADED"
		},
		{
			"hex": "#93E4C1"
		},
		{
			"hex": "#3BAEA0"
		},
		{
			"hex": "#118A7E"
		},
		{
			"hex": "#1F6F78"
		},
		{
			"hex": "#9DDCDC"
		},
		{
			"hex": "#FFF4E1"
		},
		{
			"hex": "#FFEBB7"
		},
		{
			"hex": "#E67A7A"
		},
		{
			"hex": "#B062EA"
		},
		{
			"hex": "#F392F2"
		},
		{
			"hex": "#FED08F"
		},
		{
			"hex": "#F6F39F"
		},
		{
			"hex": "#B23256"
		},
		{
			"hex": "#FCD47D"
		},
		{
			"hex": "#31AA75"
		},
		{
			"hex": "#A2EF44"
		},
		{
			"hex": "#C9182B"
		},
		{
			"hex": "#F23A3A"
		},
		{
			"hex": "#E3F3AC"
		},
		{
			"hex": "#44C662"
		},
		{
			"hex": "#D1FFA2"
		},
		{
			"hex": "#00CF95"
		},
		{
			"hex": "#0098EF"
		},
		{
			"hex": "#6D0AD3"
		}
	]
};

const app = require('express')();
app.get('/', (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(pkg));
});
app.listen();