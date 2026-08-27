import {
  router,
  useLocalSearchParams,
} from "expo-router";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { profissionais } from "../data/professionals";

export default function Profissionais() {
  const {
    servicoNome,
    preco,
  } = useLocalSearchParams();

  function selecionarProfissional(
    id: number,
    nome: string
  ) {
    router.push({
      pathname: "/agendamento",

      params: {
        servicoNome: String(servicoNome),
        preco: String(preco),
        profissionalId: String(id),
        profissionalNome: nome,
      },
    } as any);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        onPress={() => router.back()}
      >
        <Text style={styles.voltar}>
          ← Voltar
        </Text>
      </Pressable>

      <Text style={styles.titulo}>
        Escolha o profissional
      </Text>

      <Text style={styles.servico}>
        Serviço selecionado:
      </Text>

      <Text style={styles.nomeServico}>
        {String(servicoNome)}
      </Text>

      <View style={styles.lista}>
        {profissionais.map(
          (profissional) => (
            <View
              key={profissional.id}
              style={styles.card}
            >
              <View style={styles.avatar}>
                <Text style={styles.icone}>
                  {profissional.icone}
                </Text>
              </View>

              <View style={styles.informacoes}>
                <Text style={styles.nome}>
                  {profissional.nome}
                </Text>

                <Text style={styles.especialidade}>
                  {profissional.especialidade}
                </Text>

                <Text style={styles.avaliacao}>
                  ⭐ {profissional.avaliacao}
                </Text>

                <Pressable
                  style={styles.botao}
                  onPress={() =>
                    selecionarProfissional(
                      profissional.id,
                      profissional.nome
                    )
                  }
                >
                  <Text style={styles.textoBotao}>
                    Selecionar
                  </Text>
                </Pressable>
              </View>
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  conteudo: {
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  voltar: {
    fontSize: 16,
    color: "#3757D5",
    marginBottom: 22,
    fontWeight: "600",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
  },

  servico: {
    fontSize: 14,
    color: "#777777",
    marginTop: 10,
  },

  nomeServico: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3757D5",
    marginTop: 3,
    marginBottom: 25,
  },

  lista: {
    gap: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    gap: 15,
    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E8EEFF",
    justifyContent: "center",
    alignItems: "center",
  },

  icone: {
    fontSize: 30,
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },

  especialidade: {
    fontSize: 14,
    color: "#777777",
    marginTop: 4,
  },

  avaliacao: {
    fontSize: 14,
    marginTop: 6,
  },

  botao: {
    backgroundColor: "#3757D5",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});