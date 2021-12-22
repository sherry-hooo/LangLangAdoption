import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://data.coa.gov.tw/api/v1/AnimalRecognition/",
  withCredentials: false,
});

export default {
  getAnimalData(kind, id) {
    return apiClient.get(`/`, {
      params: {
        animal_kind: kind,
        animal_id: id,
        Page: 1,
        api_key: "PLFET0ETCEA6U8T0TI0R0NCEUJDLHE",
      },
    });
  },
  getShelterData(kind, areaPkid, pkid) {
    return apiClient.get(`/`, {
      params: {
        animal_kind: kind,
        animal_area_pkid: areaPkid,
        animal_shelter_pkid: pkid,
        Page: 1,
        api_key: "PLFET0ETCEA6U8T0TI0R0NCEUJDLHE",
      },
    });
  },
  getCityShelter(kind, areaPkid) {
    return apiClient.get(`/`, {
      params: {
        animal_kind: kind,
        animal_area_pkid: areaPkid,
        Page: 1,
        api_key: "PLFET0ETCEA6U8T0TI0R0NCEUJDLHE",
      },
    });
  },
};
