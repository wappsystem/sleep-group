(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "paid-data":  			{url:"$H/modules/paid-data.html",Table:"paid-wappsystem",form_module:"paid-form",tags:"marketing"},
        "paid-form":  			{url:"$H/modules/paid-form.html",Table:"paid-wappsystem",tags:'marketing'},
        "charged-data":    			    {url:"$H/modules/charged-data.html",Table:"charged-wappsystem",form_module:"charged-form"},
        "charged-form":    			    {url:"$H/modules/charged-form.html",Table:"charged-wappsystem"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
