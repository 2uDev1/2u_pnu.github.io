class Barrier {
  constructor(no, type, latlng) {
    this.no = no;
    this.type = type;
    this.latlng = latlng;
    switch (type) {
      case 1:
        this.strType = "단차";
        break;
      case 2:
        this.strType = "통행폭";
        break;
      case 3:
        this.strType = "경사";
        break;
      case 4:
        this.strType = "마감부실";
        break;
    }
    this.makeMarker();
  }

  makeMarker() {
    let url;
    switch (this.type) {
      case 1:
        url = './img/circle_black.png';
        break;
      case 2:
        url = './img/circle_blue.png';
        break;
      case 3:
        url = './img/circle_red.png';
        break;
      case 4:
        url = './img/check_black.png';
        break;
    }

    this.marker = new naver.maps.Marker({
      position: this.latlng,
      map: map,
      icon: {
        url: url,
        size: new naver.maps.Size(20, 20),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(10, 10),
      }
    });
    this.infoMaker();
  }

  infoMaker() {
    this.infoWindow = new naver.maps.InfoWindow({
      content: '<p>종류: ' + this.strType + '<br /></p>' + '<img src="./img/barrier/' + this.no + '.jpg"' + ' width="200"' + ' alt="Barrier">',
      backgroundColor: "#fff",
      borderColor: "#333",
      anchorSize: new naver.maps.Size(20, 20),
      anchorSkew: true,
      anchorColor: "#fff",
      pixelOffset: new naver.maps.Point(10, -10)
    });
  }
}

let barrierList = [];

barrierList.push(new Barrier(	1	,	3	,new naver.maps.LatLng(35.2354478	,129.0823656	)));
barrierList.push(new Barrier(	2	,	3	,new naver.maps.LatLng(35.2361182	,129.0817970	)));
barrierList.push(new Barrier(	3	,	1	,new naver.maps.LatLng(35.2364819	,129.0816629	)));
barrierList.push(new Barrier(	4	,	1	,new naver.maps.LatLng(35.2364644	,129.0811372	)));
barrierList.push(new Barrier(	5	,	2	,new naver.maps.LatLng(35.2364633	,129.0810285	)));
barrierList.push(new Barrier(	6	,	4	,new naver.maps.LatLng(35.2364720	,129.0809400	)));
barrierList.push(new Barrier(	7	,	1	,new naver.maps.LatLng(35.2365969	,129.0808917	)));
barrierList.push(new Barrier(	8	,	2	,new naver.maps.LatLng(35.2365618	,129.0806342	)));
barrierList.push(new Barrier(	9	,	2	,new naver.maps.LatLng(35.2365684	,129.0805672	)));
barrierList.push(new Barrier(	10	,	4	,new naver.maps.LatLng(35.2365388	,129.0804907	)));
barrierList.push(new Barrier(	11	,	4	,new naver.maps.LatLng(35.2364994	,129.0804344	)));
barrierList.push(new Barrier(	12	,	4	,new naver.maps.LatLng(35.2364622	,129.0803835	)));
barrierList.push(new Barrier(	13	,	3	,new naver.maps.LatLng(35.2367053	,129.0803700	)));
barrierList.push(new Barrier(	14	,	1	,new naver.maps.LatLng(35.2369266	,129.0798631	)));
barrierList.push(new Barrier(	15	,	1	,new naver.maps.LatLng(35.2368916	,129.0798095	)));
barrierList.push(new Barrier(	16	,	1	,new naver.maps.LatLng(35.2371194	,129.0793535	)));
barrierList.push(new Barrier(	17	,	2	,new naver.maps.LatLng(35.2373867	,129.0789029	)));
barrierList.push(new Barrier(	18	,	2	,new naver.maps.LatLng(35.2373231	,129.0782216	)));
barrierList.push(new Barrier(	19	,	2	,new naver.maps.LatLng(35.2372224	,129.0781063	)));
barrierList.push(new Barrier(	20	,	1	,new naver.maps.LatLng(35.2370668	,129.0779024	)));
barrierList.push(new Barrier(	21	,	1	,new naver.maps.LatLng(35.2369704	,129.0773284	)));
barrierList.push(new Barrier(	22	,	4	,new naver.maps.LatLng(35.2370624	,129.0773740	)));
barrierList.push(new Barrier(	23	,	1	,new naver.maps.LatLng(35.2371260	,129.0773928	)));
barrierList.push(new Barrier(	24	,	4	,new naver.maps.LatLng(35.2371983	,129.0773982	)));
barrierList.push(new Barrier(	25	,	1	,new naver.maps.LatLng(35.2372574	,129.0773928	)));
barrierList.push(new Barrier(	26	,	4	,new naver.maps.LatLng(35.2363329	,129.0789324	)));
barrierList.push(new Barrier(	27	,	2	,new naver.maps.LatLng(35.2362058	,129.0788626	)));
barrierList.push(new Barrier(	28	,	2	,new naver.maps.LatLng(35.2361314	,129.0788358	)));
barrierList.push(new Barrier(	29	,	4	,new naver.maps.LatLng(35.2360218	,129.0788036	)));
barrierList.push(new Barrier(	30	,	2	,new naver.maps.LatLng(35.2358750	,129.0787580	)));
barrierList.push(new Barrier(	31	,	2	,new naver.maps.LatLng(35.2356494	,129.0786749	)));
barrierList.push(new Barrier(	32	,	2	,new naver.maps.LatLng(35.2355004	,129.0786320	)));
barrierList.push(new Barrier(	33	,	2	,new naver.maps.LatLng(35.2353295	,129.0785703	)));
barrierList.push(new Barrier(	34	,	1	,new naver.maps.LatLng(35.2350053	,129.0783825	)));
barrierList.push(new Barrier(	35	,	1	,new naver.maps.LatLng(35.2340150	,129.0779587	)));
barrierList.push(new Barrier(	36	,	1	,new naver.maps.LatLng(35.2320553	,129.0754428	)));
barrierList.push(new Barrier(	37	,	4	,new naver.maps.LatLng(35.2321101	,129.0755260	)));
barrierList.push(new Barrier(	38	,	4	,new naver.maps.LatLng(35.2321868	,129.0755877	)));
barrierList.push(new Barrier(	39	,	4	,new naver.maps.LatLng(35.2322832	,129.0756359	)));
barrierList.push(new Barrier(	40	,	4	,new naver.maps.LatLng(35.2323818	,129.0757915	)));
barrierList.push(new Barrier(	41	,	4	,new naver.maps.LatLng(35.2323796	,129.0759632	)));
barrierList.push(new Barrier(	42	,	4	,new naver.maps.LatLng(35.2322744	,129.0764969	)));
barrierList.push(new Barrier(	43	,	1	,new naver.maps.LatLng(35.2320728	,129.0776342	)));
barrierList.push(new Barrier(	44	,	1	,new naver.maps.LatLng(35.2321232	,129.0776691	)));
barrierList.push(new Barrier(	45	,	4	,new naver.maps.LatLng(35.2336941	,129.0780151	)));
barrierList.push(new Barrier(	46	,	3	,new naver.maps.LatLng(35.2338672	,129.0780741	)));
barrierList.push(new Barrier(	47	,	1	,new naver.maps.LatLng(35.2337971	,129.0786856	)));
barrierList.push(new Barrier(	48	,	1	,new naver.maps.LatLng(35.2337445	,129.0790209	)));
barrierList.push(new Barrier(	49	,	2	,new naver.maps.LatLng(35.2337094	,129.0792328	)));
barrierList.push(new Barrier(	50	,	1	,new naver.maps.LatLng(35.2329404	,129.0791952	)));
barrierList.push(new Barrier(	51	,	4	,new naver.maps.LatLng(35.2330259	,129.0797558	)));
barrierList.push(new Barrier(	52	,	1	,new naver.maps.LatLng(35.2329886	,129.0798658	)));
barrierList.push(new Barrier(	53	,	3	,new naver.maps.LatLng(35.2328659	,129.0799328	)));
barrierList.push(new Barrier(	54	,	1	,new naver.maps.LatLng(35.2329207	,129.0801125	)));
barrierList.push(new Barrier(	55	,	2	,new naver.maps.LatLng(35.2328550	,129.0803003	)));
barrierList.push(new Barrier(	56	,	1	,new naver.maps.LatLng(35.2327148	,129.0802788	)));
barrierList.push(new Barrier(	57	,	1	,new naver.maps.LatLng(35.2326249	,129.0807563	)));
barrierList.push(new Barrier(	58	,	4	,new naver.maps.LatLng(35.2318253	,129.0804371	)));
barrierList.push(new Barrier(	59	,	1	,new naver.maps.LatLng(35.2316281	,129.0806463	)));
barrierList.push(new Barrier(	60	,	1	,new naver.maps.LatLng(35.2307452	,129.0799650	)));
barrierList.push(new Barrier(	61	,	1	,new naver.maps.LatLng(35.2307671	,129.0797826	)));
barrierList.push(new Barrier(	62	,	2	,new naver.maps.LatLng(35.2307824	,129.0797263	)));
barrierList.push(new Barrier(	63	,	1	,new naver.maps.LatLng(35.2308613	,129.0796888	)));
barrierList.push(new Barrier(	64	,	1	,new naver.maps.LatLng(35.2308985	,129.0796056	)));
barrierList.push(new Barrier(	65	,	2	,new naver.maps.LatLng(35.2308876	,129.0794608	)));
barrierList.push(new Barrier(	66	,	3	,new naver.maps.LatLng(35.2309774	,129.0794098	)));
barrierList.push(new Barrier(	67	,	2	,new naver.maps.LatLng(35.2310453	,129.0792542	)));
barrierList.push(new Barrier(	68	,	2	,new naver.maps.LatLng(35.2311088	,129.0791309	)));
barrierList.push(new Barrier(	69	,	4	,new naver.maps.LatLng(35.2311855	,129.0789780	)));
barrierList.push(new Barrier(	70	,	2	,new naver.maps.LatLng(35.2312819	,129.0788224	)));
barrierList.push(new Barrier(	71	,	3	,new naver.maps.LatLng(35.2313433	,129.0787205	)));
barrierList.push(new Barrier(	72	,	2	,new naver.maps.LatLng(35.2314178	,129.0786132	)));
barrierList.push(new Barrier(	73	,	1	,new naver.maps.LatLng(35.2314134	,129.0785247	)));
barrierList.push(new Barrier(	74	,	1	,new naver.maps.LatLng(35.2314660	,129.0784496	)));
barrierList.push(new Barrier(	75	,	2	,new naver.maps.LatLng(35.2316960	,129.0785810	)));
barrierList.push(new Barrier(	76	,	2	,new naver.maps.LatLng(35.2318472	,129.0786346	)));
barrierList.push(new Barrier(	77	,	1	,new naver.maps.LatLng(35.2320071	,129.0786963	)));
barrierList.push(new Barrier(	78	,	1	,new naver.maps.LatLng(35.2321714	,129.0787500	)));
barrierList.push(new Barrier(	79	,	1	,new naver.maps.LatLng(35.2326534	,129.0789511	)));
barrierList.push(new Barrier(	80	,	4	,new naver.maps.LatLng(35.2311483	,129.0805953	)));
barrierList.push(new Barrier(	81	,	4	,new naver.maps.LatLng(	35.2311088	,129.0807134	)));
barrierList.push(new Barrier(	82	,	4	,new naver.maps.LatLng(	35.2310694	,129.0808287	)));
barrierList.push(new Barrier(	83	,	4	,new naver.maps.LatLng(	35.2310234	,129.0809655	)));
barrierList.push(new Barrier(	84	,	4	,new naver.maps.LatLng(	35.2309862	,129.0810862	)));
barrierList.push(new Barrier(	85	,	1	,new naver.maps.LatLng(	35.2308481	,129.0811720	)));
barrierList.push(new Barrier(	86	,	1	,new naver.maps.LatLng(	35.2309292	,129.0812552	)));
barrierList.push(new Barrier(	87	,	1	,new naver.maps.LatLng(	35.2305283	,129.0824514	)));
barrierList.push(new Barrier(	88	,	1	,new naver.maps.LatLng(	35.2305918	,129.0825748	)));
barrierList.push(new Barrier(	89	,	1	,new naver.maps.LatLng(	35.2306970	,129.0825855	)));
barrierList.push(new Barrier(	90	,	1	,new naver.maps.LatLng(	35.2311702	,129.0828055	)));
barrierList.push(new Barrier(	91	,	1	,new naver.maps.LatLng(	35.2311505	,129.0828913	)));
barrierList.push(new Barrier(	92	,	2	,new naver.maps.LatLng(	35.2313345	,129.0830013	)));
barrierList.push(new Barrier(	93	,	1	,new naver.maps.LatLng(	35.2310628	,129.0814670	)));
barrierList.push(new Barrier(	94	,	1	,new naver.maps.LatLng(	35.2310913	,129.0813490	)));
barrierList.push(new Barrier(	95	,	1	,new naver.maps.LatLng(	35.2309905	,129.0814027	)));
barrierList.push(new Barrier(	96	,	1	,new naver.maps.LatLng(	35.2322678	,129.0816441	)));
barrierList.push(new Barrier(	97	,	1	,new naver.maps.LatLng(	35.2324387	,129.0817433	)));
barrierList.push(new Barrier(	98	,	1	,new naver.maps.LatLng(	35.2325745	,129.0818345	)));
barrierList.push(new Barrier(	99	,	1	,new naver.maps.LatLng(	35.2325241	,129.0819874	)));
barrierList.push(new Barrier(	100	,	1	,new naver.maps.LatLng(	35.2327498	,129.0819391	)));
barrierList.push(new Barrier(	101	,	1	,new naver.maps.LatLng(	35.2326972	,129.0821027	)));
barrierList.push(new Barrier(	102	,	1	,new naver.maps.LatLng(	35.2331354	,129.0820088	)));
barrierList.push(new Barrier(	103	,	1	,new naver.maps.LatLng(	35.2332339	,129.0821269	)));
barrierList.push(new Barrier(	104	,	1	,new naver.maps.LatLng(	35.2332120	,129.0822583	)));
barrierList.push(new Barrier(	105	,	1	,new naver.maps.LatLng(	35.2333829	,129.0821725	)));
barrierList.push(new Barrier(	106	,	1	,new naver.maps.LatLng(	35.2333676	,129.0822932	)));
barrierList.push(new Barrier(	107	,	1	,new naver.maps.LatLng(	35.2332559	,129.0818399	)));
barrierList.push(new Barrier(	108	,	1	,new naver.maps.LatLng(	35.2333172	,129.0817245	)));
barrierList.push(new Barrier(	109	,	1	,new naver.maps.LatLng(	35.2334333	,129.0812766	)));
barrierList.push(new Barrier(	110	,	1	,new naver.maps.LatLng(	35.2334421	,129.0811478	)));
barrierList.push(new Barrier(	111	,	1	,new naver.maps.LatLng(	35.2338277	,129.0792140	)));
barrierList.push(new Barrier(	112	,	1	,new naver.maps.LatLng(	35.2341935	,129.0792998	)));
barrierList.push(new Barrier(	113	,	1	,new naver.maps.LatLng(	35.2344630	,129.0794339	)));
barrierList.push(new Barrier(	114	,	4	,new naver.maps.LatLng(	35.2347916	,129.0793776	)));
barrierList.push(new Barrier(	115	,	1	,new naver.maps.LatLng(	35.2349625	,129.0785944	)));
barrierList.push(new Barrier(	116	,	4	,new naver.maps.LatLng(	35.2362770	,129.0790651	)));
barrierList.push(new Barrier(	117	,	2	,new naver.maps.LatLng(	35.2362266	,129.0793038	)));
barrierList.push(new Barrier(	118	,	2	,new naver.maps.LatLng(	35.2361039	,129.0794728	)));
barrierList.push(new Barrier(	119	,	1	,new naver.maps.LatLng(	35.2359331	,129.0795828	)));
barrierList.push(new Barrier(	120	,	1	,new naver.maps.LatLng(	35.2356877	,129.0797920	)));
barrierList.push(new Barrier(	121	,	1	,new naver.maps.LatLng(	35.2355409	,129.0797383	)));
barrierList.push(new Barrier(	122	,	1	,new naver.maps.LatLng(	35.2354752	,129.0797196	)));
barrierList.push(new Barrier(	123	,	1	,new naver.maps.LatLng(35.2356789	,129.0800066	)));
barrierList.push(new Barrier(	124	,	1	,new naver.maps.LatLng(	35.2355453	,129.0802989	)));
barrierList.push(new Barrier(	125	,	1	,new naver.maps.LatLng(	35.2355124	,129.0805725	)));
barrierList.push(new Barrier(	126	,	1	,new naver.maps.LatLng(	35.2352210	,129.0810419	)));
barrierList.push(new Barrier(	127	,	2	,new naver.maps.LatLng(	35.2351159	,129.0812672	)));
barrierList.push(new Barrier(	128	,	1	,new naver.maps.LatLng(	35.2350129	,129.0815354	)));
barrierList.push(new Barrier(	129	,	1	,new naver.maps.LatLng(	35.2343206	,129.0813343	)));
barrierList.push(new Barrier(	130	,	1	,new naver.maps.LatLng(	35.2344039	,129.0802359	)));
barrierList.push(new Barrier(	131	,	1	,new naver.maps.LatLng(	35.2342812	,129.0804666	)));
barrierList.push(new Barrier(	132	,	1	,new naver.maps.LatLng(	35.2336447	,129.0809306	)));
barrierList.push(new Barrier(	133	,	4	,new naver.maps.LatLng(	35.2323368	,129.0820853	)));
barrierList.push(new Barrier(	134	,	1	,new naver.maps.LatLng(	35.2346744	,129.0819512	)));
barrierList.push(new Barrier(	135	,	1	,new naver.maps.LatLng(	35.2347796	,129.0819378	)));
barrierList.push(new Barrier(	136	,	1	,new naver.maps.LatLng(	35.2349527	,129.0819270	)));
barrierList.push(new Barrier(	137	,	1	,new naver.maps.LatLng(	35.2351279	,129.0816937	)));

for (let i = 0; i < barrierList.length; i++) {
  naver.maps.Event.addListener(barrierList[i].marker, 'click', function(e) {
    const idx = i;
    if (barrierList[idx].infoWindow.getMap()) {
      barrierList[idx].infoWindow.close();
    } else {
      barrierList[idx].infoWindow.open(map, barrierList[idx].marker);
    }
  });
}
