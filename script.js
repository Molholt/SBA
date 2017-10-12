var curr = new Array('curr_ins','curr_jps','curr_ft','curr_3ps','curr_hnd','curr_pas','curr_orb','curr_drb','curr_psd','curr_prd','curr_stl','curr_blk','curr_fl','curr_qkn','curr_str','curr_jmp');
var pct = new Array('pct_ins','pct_jps','pct_ft','pct_3ps','pct_hnd','pct_pas','pct_orb','pct_drb','pct_psd','pct_prd','pct_stl','pct_blk','pct_fl','pct_qkn','pct_str','pct_jmp',);
var lbl = new Array('reg_ins','reg_jps','reg_ft','reg_3ps','reg_hnd','reg_pas','reg_orb','reg_drb','reg_psd','reg_prd','reg_stl','reg_blk','reg_fl','reg_qkn','reg_str','reg_jmp',);
var loss = 0;

// Function to tally lost APE during regression
function Subtract(current,regress)
{
var a = current;
var b = regress;
while(a > b)
{
if(a>95)
	{
		loss += 12;
	}
else if(a>90)
	{
		loss += 7;
	}
else if(a>85)
	{
		loss += 5;
	}
else if(a>80)
	{
		loss += 3;
	}
else if(a>70)
	{
		loss += 2;
	}
else 
	{
		loss += 1;
	}
a--;
}

}

//Function to calculate regressed attributes and APE. Utilizes Subtract()
function Regress()
{
var i = 0;
var r = 0;
var reg = new Array;
while (i < curr.length)
{
reg[i] = (document.getElementById(curr[i]).value - (document.getElementById(curr[i]).value * document.getElementById(pct[i]).value));
document.getElementById(lbl[i]).value = Math.round(reg[i]);
Subtract(document.getElementById(curr[i]).value,document.getElementById(lbl[i]).value);
i++;
}
q = document.getElementById('curr_bnk').value * document.getElementById('pct_bnk').value;
r = document.getElementById('curr_bnk').value - q;
document.getElementById('reg_bnk').value = r;
document.getElementById('ape').value = document.getElementById('tpe').value - loss - q;
loss = 0;
}

// Function to input regression percentages for each attribute, based on weaknesses/strengths and year of regression
// Also runs Regress() at the end to auto-update fields
function template(year)
{
var i = 0;
var k = 0;
var w = new Array('ins','jps','ft','3ps','hnd','pas','orb','drb','psd','prd','stl','blk','fl','qkn','str','jmp');
switch(year)
{
	case '9':
		while (i <pct.length)
		{
		if (document.getElementById('w_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .12;
			}
		else if (document.getElementById('s_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .04;	
			}
		else
			{
			document.getElementById(pct[i]).value = .08;
			}
		document.getElementById('pct_bnk').value = .08;
		i++;
		}
	case '10':
		while (i <pct.length)
		{
		if (document.getElementById('w_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .15;
			}
		else if (document.getElementById('s_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .04;	
			}
		else
			{
			document.getElementById(pct[i]).value = .08;
			}
		document.getElementById('pct_bnk').value = .08;
		i++;
		}
	case '11':
		while (i <pct.length)
		{
		if (document.getElementById('w_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .18;
			}
		else if (document.getElementById('s_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .06;	
			}
		else
			{
			document.getElementById(pct[i]).value = .12;
			}
		document.getElementById('pct_bnk').value = .12;
		i++;
		}
	case '12':
		while (i <pct.length)
		{
		if (document.getElementById('w_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .24;
			}
		else if (document.getElementById('s_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .08;	
			}
		else
			{
			document.getElementById(pct[i]).value = .16;
			}
		document.getElementById('pct_bnk').value = .16;
		i++;
		}
	case '13':
		while (i <pct.length)
		{
		if (document.getElementById('w_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .30;
			}
		else if (document.getElementById('s_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .10;	
			}
		else
			{
			document.getElementById(pct[i]).value = .20;
			}
		document.getElementById('pct_bnk').value = .20;
		i++;
		}
	case '14':
		while (i <pct.length)
		{
		if (document.getElementById('w_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .45;
			}
		else if (document.getElementById('s_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .15;	
			}
		else
			{
			document.getElementById(pct[i]).value = .30;
			}
		document.getElementById('pct_bnk').value = .30;
		i++;
		}
	case '15':
		while (i <pct.length)
		{
		if (document.getElementById('w_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .60;
			}
		else if (document.getElementById('s_'+w[i]).checked)
			{
			document.getElementById(pct[i]).value = .20;	
			}
		else
			{
			document.getElementById(pct[i]).value = .40;
			}
		document.getElementById('pct_bnk').value = .40;
		i++;
		}		
}
Regress();
}

// Function to move Regressed Attribute values into the Current Attributes column
function Swap() 
{
var i = 0;
while (i <curr.length)
{
	document.getElementById(curr[i]).value = document.getElementById(lbl[i]).value;
	i++;
}
document.getElementById('curr_bnk').value = document.getElementById('reg_bnk').value;
document.getElementById('tpe').value = document.getElementById('ape').value;
}

// Function to print Attribute labels and their values in a pop-up
function Print() 
{
var lab = new Array('Inside Shot','Jump Shot','Free Throw','Three Point','Handling','Passing','Offensive Rebounding','Defensive Rebounding','Post Defense','Perimeter Defense','Stealing','Blocking','Fouling','Quickness','Strength','Jumping');
var i = 0;
var reg = new Array;
var prn = new Array;
while(i < lbl.length)
{
reg[i] = document.getElementById(lbl[i]).value;
prn[i] = lab[i].concat(': '+reg[i]);
i++;
}
alert(prn.join('\n'));
}

// Function to reset the Regression Calculator
function Reset() 
{
    document.getElementById("regcalc").reset();
}

// Function to import Current Attributes from the Import Text Area
// Useful for copying from a player page directly into the Regression Calculator
function Import()
{
var i = 0;
var k = 0;
var impArray = document.getElementById('import').value.split('\n');
while (i < curr.length)
{
	impArray[i] = impArray[i].slice(-2);
	i++;
}
while (k < curr.length)
{
	document.getElementById(curr[k]).value = impArray[k];
	k++;
}
}

// Function used to populate test values for validation purposes
function Test() 
{
var i = 0;
while(i < curr.length)
{
	document.getElementById(curr[i]).value = 90;
	i++;
}
document.getElementById('curr_bnk').value = 200;
document.getElementById('tpe').value = 1720;
}

// Function that allows a checkbox to control whether the Import TextArea is displayed or hidden
function displayImport()
{
if(document.getElementById('disimp').checked)
{
	document.getElementById('display').style.display = "inherit";
}
else
{
	document.getElementById('display').style.display = "none";
}

}
