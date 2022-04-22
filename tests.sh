# curl -sX GET "https://www.federalregister.gov/api/v1/documents.json?per_page=20&order=newest&conditions[agencies][]=commerce-department" \
# -H "accept: */*" | jq '.results[0].document_number'


# curl -sX GET "https://www.federalregister.gov/api/v1/documents/2022-08590.json" -H "accept: */*" | jq