
export const prepare_url_params = (url,params)=>{
    let final_url = url;
    if(params)
    {
        let params_arr=[];
        for(let v of Object.keys(params))
        {
            params_arr = params_arr.concat(v+"="+params[v]);
        }
        final_url +="?"+params_arr.join("&");
    }
    return final_url;

}

export const isCompanyProfileUpdated = (company)=>
{
    let {investment_size,company_type,uen,office_tel,stock_code,company_hq,company_profile,industry,sub_industry} = company;
     if(company_type =="LC")
      {

            return !(!office_tel || !stock_code || !company_hq || !company_profile);
      }
      else
          return !(!office_tel  || !investment_size || !company_hq || !industry || industry.length <=0 || !sub_industry || sub_industry.length <=0 || !company_profile);

}
