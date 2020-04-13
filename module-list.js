(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "special":  			{url:"$H/m/special.html"},
        "dashboard":  			{url:"$H/m/balance-current.html",Table:"charged-wappsystem",Table_2:"paid-wappsystem"},
        "research-leader-data":    			    {url:"$H/m/research-leader-data.html",Table:"research-leader-wappsystem",form_module:"research-leader-form"},
        "research-leader-form":    	{url:"$H/m/research-leader-form.html",Table:"research-leader-wappsystem"},
        "charge-print": 	        {url:"$H/m/charge-print.html",Table:"research-leader-wappsystem",Table_2:"charged-wappsystem",Table_3:"paid-wappsystem"},
        "paid-data":  			{url:"$H/m/paid-data.html",Table:"paid-wappsystem",form_module:"paid-form",tags:"marketing"},
        "paid-form":  			{url:"$H/m/paid-form.html",Table:"paid-wappsystem",tags:'marketing'},
        "charged-data":    			    {url:"$H/m/charged-data.html",Table:"charged-wappsystem",form_module:"charged-form"},
        "charged-form":    			    {url:"$H/m/charged-form.html",Table:"charged-wappsystem"},
        "b-ftt12-data":    			    {url:"$H/m/ftt12-data.html",Table:"b-ftt12-wappsystem",form_module:"b-ftt12-form"},
        "b-ftt12-form":    			    {url:"$H/m/ftt12-form.html",Table:"b-ftt12-wappsystem"},
        "b-ftt6-data":    			    {url:"$H/m/ftt6-data.html",Table:"b-ftt6-wappsystem",form_module:"b-ftt6-form"},
        "b-ftt6-form":    			    {url:"$H/m/ftt6-form.html",Table:"b-ftt6-wappsystem"},
        "t-ftt12-data":    			    {url:"$H/m/ftt12-data.html",Table:"t-ftt12-wappsystem",form_module:"t-ftt12-form"},
        "t-ftt12-form":    			    {url:"$H/m/ftt12-form.html",Table:"t-ftt12-wappsystem"},
        "t-ftt6-data":    			    {url:"$H/m/ftt6-data.html",Table:"t-ftt6-wappsystem",form_module:"t-ftt6-form"},
        "t-ftt6-form":    			    {url:"$H/m/ftt6-form.html",Table:"t-ftt6-wappsystem"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
